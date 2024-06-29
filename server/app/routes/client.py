from fastapi import status, APIRouter
from ..schemas import Client
from ..config import clients_collection
from bson import ObjectId

router = APIRouter(
    prefix = "/clients",
    tags=["Client"]
)

@router.get("/")
def get_clients():

    clients = list(clients_collection.find())
    for client in clients:
        client["_id"] = str(client["_id"])
    return {"clients": clients}

    return {"message": "returning all clients"}

@router.get("/{id}")
def get_client(id: str):
    # Code to get specific client from database
    if not ObjectId.is_valid(id):
        raise HTTPException(status_code=400, detail="Invalid client ID")

    client = clients_collection.find_one({"_id": ObjectId(id)})

    if client:
        client["_id"] = str(client["_id"])
        return {"client": client}
    else:
        raise HTTPException(status_code=404, detail=f"Client with id {id} not found")
    

@router.post("/", status_code = status.HTTP_201_CREATED)
def create_client(new_client: Client):
    #Code to create new client
    try:
        resp = clients_collection.insert_one(dict(new_client))
        return {"status":200, "id":str(resp.inserted_id)}
    except Exception as e:
        HTTPException(status_code=500, detail= f"Some error occured, {e}")
    return {"message": "client created successfully"}

@router.put("/{id}")
def update_client(id: str, updated_client: Client):
    if not ObjectId.is_valid(id):
        raise HTTPException(status_code=400, detail="Invalid client ID")
    result = clients_collection.update_one(
        {"_id": ObjectId(id)}, {"$set": dict(updated_client)}
    )
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Client not found")
    else:
        return {"message":"Client Updated Successfullt"}

@router.delete("/{id}", status_code= status.HTTP_204_NO_CONTENT)
def delete_client(id : str):
    # Code to delete client
    if not ObjectId.is_valid(id):
        raise HTTPException(status_code=400, detail="Invalid client ID")

    result = clients_collection.delete_one({"_id": ObjectId(id)})

    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Client not found")
        
    return {"message": "Client deleted successfully"}
