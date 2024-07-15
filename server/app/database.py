# from pymongo.mongo_client import MongoClient
# from pymongo.server_api import ServerApi
# from .config import settings

# uri = f"mongodb+srv://{settings.database_username}:{settings.database_password}@dabs-fullstack.zvwtzb9.mongodb.net/?retryWrites=true&w=majority&appName=dabs-fullstack"

# # Create a new client and connect to the server
# client = MongoClient(uri, server_api=ServerApi('1'))

# db = client.cms
# clients_collection = db["clients"]
# admin_collection = db["admin"]

import time
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from pymongo.errors import ConfigurationError
from .config import settings

uri = f"mongodb+srv://{settings.database_username}:{settings.database_password}@dabs-fullstack.zvwtzb9.mongodb.net/?retryWrites=true&w=majority&appName=dabs-fullstack"

def connect_to_mongo(uri, retries=5, delay=5):
    for i in range(retries):
        try:
            client = MongoClient(uri, server_api=ServerApi('1'))
            return client
        except ConfigurationError as e:
            print(f"Attempt {i+1} failed: {e}")
            time.sleep(delay)
    raise Exception("Could not connect to MongoDB after several retries")

client = connect_to_mongo(uri)
db = client.cms
clients_collection = db["clients"]
admin_collection = db["admin"]
