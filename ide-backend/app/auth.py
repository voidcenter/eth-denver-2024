import os

from httpx_oauth.clients.github import GitHubOAuth2

github_client = GitHubOAuth2(
    os.environ["GITHUB_CLIENT_ID_" + os.environ["ENVIRONMENT"]],
    os.environ["GITHUB_CLIENT_SECRET_" + os.environ["ENVIRONMENT"]],
    scopes=["user", "repo"]
)
