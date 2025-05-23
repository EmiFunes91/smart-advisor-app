from datetime import datetime
from pydantic import BaseModel

class AskRequest(BaseModel):
    question: str

class AskResponse(BaseModel):
    answer: str

class AskHistoryItem(BaseModel):
    question: str
    answer: str
    created_at: datetime

    class Config:
        orm_mode = True