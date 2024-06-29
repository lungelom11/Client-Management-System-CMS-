from fastapi import FastAPI, status
from pydantic import BaseModel

app = FastAPI()

class Client(BaseModel):
    firstname: str
    lastname: str
    email: str
    address: str
    phone: int
    status: str = "Pending"

@app.get("/")
def home():
    return {"message":"welcome to CMS server"}

@app.get("/clients")
def get_clients(client: Client):
    #Code to extract clients from database
    return {"message": "returning all clients"}

@app.get("/clients/:id")
def get_client(id: int):
    #Code to get specific client from database
    print(id)
    return {"message": "returning specific client"}

@app.post("/clients", status_code = status.HTTP_201_CREATED)
def create_client(new_client: Client):
    #Code to create new client
    return {"message": "client created successfully"}

@app.put("/clients/:id", status_code=status.HTTP_201_CREATED)
def update_client(id : int):
    #Code to udate client
    return {"message": "client updated successfully"}

@app.delete("/clients/:id", status_code= status.HTTP_204_NO_CONTENT)
def delete_client(id : int):
    #Code to delete client
    return {"message": "client deleted successfully"}
