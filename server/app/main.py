from fastapi import FastAPI
from .routes import client,admin

app = FastAPI()

@app.get("/")
def home():
    return {"message":"welcome to CMS server"}


app.include_router(client.router)
app.include_router(admin.router)