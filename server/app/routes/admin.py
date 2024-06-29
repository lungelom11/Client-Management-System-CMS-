from fastapi import status, APIRouter
from ..schemas import  Admin
from ..config import admin_collection
from ..utils import hash
from bson import ObjectId

router = APIRouter(
    prefix = "/admin",
    tags=["Admin"]
)

@router.post("/", status_code= status.HTTP_201_CREATED)
def create_admin(new_admin: Admin):

    new_admin.password = hash(new_admin.password)

    try:
        resp = admin_collection.insert_one(dict(new_admin))
        return {"status":200, "id":str(resp.inserted_id)}
    except Exception as e:
        HTTPException(status_code=500, detail= f"Some error occured, {e}")
    return {"message": "client created successfully"}



@router.delete("/{id}")
def delete_admin(id : str):
    
    if not ObjectId.is_valid(id):
        raise HTTPException(status_code=400, detail="Invalid admin ID")

    result = admin_collection.delete_one({"_id": ObjectId(id)})

    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Admin not found")
        
    return {"message": "Admin deleted successfully"}