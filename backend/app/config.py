from dotenv import load_dotenv
import os

load_dotenv()

class Settings:
    OPENAI_API_KEY: str = os.getenv("OPENAI_API_KEY")
    DATABASE_URL: str = os.getenv("DATABASE_URL")

settings = Settings()
