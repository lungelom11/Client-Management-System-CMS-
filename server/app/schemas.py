from pydantic import BaseModel, Field, EmailStr

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