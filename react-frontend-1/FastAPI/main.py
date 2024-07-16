from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow all origins for the sake of this example. 
# You should replace "*" with the actual frontend origin in a production environment.
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/Home")
async def upload_file(file: UploadFile = File(...)):
    print(file.filename)
    return {"message": f"I have received {file.filename}"}