# IDE backend
The backend of the greatest IDE ever.

## Tech Stack
- api: [FastAPI](https://fastapi.tiangolo.com/)
- package management: [Poetry](https://python-poetry.org/)
- user db: [MongoDB](https://www.mongodb.com/) + motor(driver) + beanie(ODM)
- user auth: [fastapi_users](https://github.com/fastapi-users/fastapi-users)
- deployment: ?

## Setup

### Install poetry 

``curl -sSL https://install.python-poetry.org | python3 -``

### Install packages

``poetry install``

### Setup Environment Variable
Copy .env.template, fill in variables

### Run server
``poetry run python main.py``

## Server

### Local

Visit at ``http://127.0.0.1:5000/docs``