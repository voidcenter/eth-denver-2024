import os  # Create an exception handler for the custom exception

from beanie import init_beanie
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import JSONResponse

from app.auth import github_client
from app.db import User, db
from app.github import CreateTemplateRepoException
from app.rollup.rollup import rollup_router
from app.schemas import UserCreate, UserRead, UserUpdate
from app.users import auth_backend, fastapi_users

app = FastAPI()

from starlette.requests import Request

# class CustomCORSMiddleware(BaseHTTPMiddleware):
#     async def dispatch(self, request: Request, call_next):
#         response = await call_next(request)
#         # Add CORS headers to every response
#         response.headers['Access-Control-Allow-Origin'] = '*'  # Allows all domains
#         response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
#         response.headers[
#             'Access-Control-Allow-Headers'] = 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range'
#         response.headers['Access-Control-Expose-Headers'] = 'Content-Length,Content-Range'
#         return response
#


# app.add_middleware(CustomCORSMiddleware)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    fastapi_users.get_auth_router(auth_backend), prefix="/auth/jwt", tags=["auth"]
)

app.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix="/auth",
    tags=["auth"],
)
app.include_router(
    fastapi_users.get_reset_password_router(),
    prefix="/auth",
    tags=["auth"],
)
app.include_router(
    fastapi_users.get_verify_router(UserRead),
    prefix="/auth",
    tags=["auth"],
)

app.include_router(
    fastapi_users.get_oauth_router(
        github_client,
        auth_backend,
        os.environ['JWT_SECRET'],
        redirect_url="https://spin-app-ivanwind7s-projects.vercel.app/github/callback" if os.environ[
                                                                                              "ENVIRONMENT"] == "PROD" else None,
        is_verified_by_default=True,
    ),
    prefix="/auth/github",
    tags=["auth"],
)

app.include_router(
    fastapi_users.get_users_router(UserRead, UserUpdate),
    prefix="/users",
    tags=["users"],
)

app.include_router(
    rollup_router,
    prefix="/rollup",
    tags=["rollup"]
)


@app.exception_handler(CreateTemplateRepoException)
async def custom_not_found_exception_handler(request: Request, exc: CreateTemplateRepoException):
    return JSONResponse(
        status_code=404,
        content={"message": f"{exc}"},
    )


@app.on_event("startup")
async def on_startup():
    await init_beanie(
        database=db,
        document_models=[
            User
        ],
    )
