from fastapi import FastAPI

app = FastAPI()

@app.get("/hello")
def read_hello():
    return {"message": "Hello, me how are you!"}

@app.get("/memento_mori")
def read_memento_mori():
    return {"message": "Memento Mori"}
