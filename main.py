from fastapi import FastAPI

app = FastAPI()

@app.get("/hello")
def read_hello():
    return {"message": "Hello, World!"}

@app.get("/memento_mori")
def read_memento_mori():
    return {"message": "Memento Mori"}
