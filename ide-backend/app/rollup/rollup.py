import os.path
import pathlib

from fastapi import Depends, APIRouter
from loguru import logger

from app.db import User
from app.github import create_template_repo, update_file_content
from app.rollup.rollup_schemas import RollupResponse, RollupConfig
from app.users import current_active_user

rollup_router = APIRouter(
    responses={404: {"description": "Not found"}},
)


class GithubTokenMissingException(Exception):
    def __init__(self):
        super().__init__("No github account")


@rollup_router.get("/ping")
async def ping():
    return {"ping": "pong"}


@rollup_router.options("/deploy")
async def deploy_rollup_options():
    return {"status": "success", "message": "deploy rollup options"}


@rollup_router.put("/deploy", response_model=RollupResponse)
async def deploy_rollup(rollup_config: RollupConfig, user: User = Depends(current_active_user)):
    github_token = None
    # check for github oauth account
    for account in user.oauth_accounts:
        if account.oauth_name == "github":
            github_token = account.access_token
            break
    if not github_token:
        raise GithubTokenMissingException()

    # create a template repo
    github_template = create_template_repo(github_token, rollup_config.repo_name)

    # depends on the config update files in repo

    with open(os.path.join(pathlib.Path(__file__).parent.resolve(), "template_files", "templateContract.sol"),
              "r") as file:
        content = file.read()
    updated_status = update_file_content(github_token, github_template.repo_owner, rollup_config.repo_name,
                                         "example_file.sol",
                                         content=content)
    logger.info(f"updated file in {updated_status}")

    return RollupResponse(rollup_id="id", status="success", message=f"creating a rollup", rollup=rollup_config,
                          repo_html_url=github_template.html_url)
