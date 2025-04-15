import os
from chromadb import PersistentClient

client = PersistentClient(path="./code_db")
collection = client.create_collection("react_code")

def index_files():
    for root, _, files in os.walk("src"):
        for file in files:
            if file.endswith((".js", ".jsx")):
                path = os.path.join(root, file)
                with open(path, "r") as f:
                    code = f.read()
                collection.add(
                    documents=code,
                    metadatas={"file": path},
                    ids=path
                )
    print("✅ Project indexed!")

index_files()