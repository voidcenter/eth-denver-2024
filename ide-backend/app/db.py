import os
from typing import List
import motor.motor_asyncio
from beanie import Document
from fastapi_users.db import BaseOAuthAccount, BeanieBaseUser, BeanieUserDatabase
from pydantic import Field

DATABASE_URL = f"mongodb+srv://{os.environ['MONGO_DB_HUMAN_USERNAME']}:{os.environ['MONGO_DB_HUMAN_PASSWORD']}@{os.environ['MONGO_DB_URL']}/?retryWrites=true&w=majority"

client = motor.motor_asyncio.AsyncIOMotorClient(
    DATABASE_URL, uuidRepresentation="standard"
)
db = client["database_name"]


class OAuthAccount(BaseOAuthAccount):
    pass


class User(BeanieBaseUser, Document):
    oauth_accounts: List[OAuthAccount] = Field(default_factory=list)


async def get_user_db():
    yield BeanieUserDatabase(User, OAuthAccount)
