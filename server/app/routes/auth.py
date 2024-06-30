from fastapi import status, APIRouter,HTTPException
from ..schemas import  Admin, AdminLogin
from ..config import admin_collection
from ..utils import hash, verify
from bson import ObjectId
from ..Oath2 import create_access_token

router = APIRouter(
    tags=["Authentication"]
)

@router.post('/login')
def login(user_credentials: AdminLogin):
    user = admin_collection.find_one({"email": user_credentials.email})


    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"User does not exist")

    if not verify(user_credentials.password, user["password"]):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, detail="Invalid Credentials")

    access_token = create_access_token(data={"admin_id": str(user["_id"])})

    return {"access_token": access_token, "token_type": "bearer"}





