import os

import uvicorn
from dotenv import load_dotenv

if __name__ == "__main__":
    load_dotenv()
    host = "0.0.0.0" if os.environ["ENVIRONMENT"] == "PROD" else "127.0.0.1"
    config = uvicorn.Config("app.app:app", host=host, port=5000, log_level="info",
                            reload=os.environ["ENVIRONMENT"] == "DEV")
    server = uvicorn.Server(config)
    server.run()
