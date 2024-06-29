from pydantic import BaseModel, Field, EmailStr
from typing import Optional

class Client(BaseModel):
    firstname: str
    lastname: str
    email: EmailStr
    address: str
    phone: str  # Represent phone as a string
    status: str = "Pending"

class Admin(BaseModel):
    email: str
    password: str

class AdminLogin(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    id: Optional[str] = None
