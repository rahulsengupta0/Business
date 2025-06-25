from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib

app = FastAPI()

# ✅ Enable CORS for all origins (safe for local dev)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or use ["http://localhost:3000"] to be stricter
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model and vectorizer
model = joblib.load("chat_model.pkl")
vectorizer = joblib.load("vectorizer.pkl")

# Request schema
class ChatRequest(BaseModel):
    message: str

# Chat endpoint
@app.post("/chat")
def get_response(data: ChatRequest):
    vec = vectorizer.transform([data.message])
    prediction = model.predict(vec)[0]
    return {"response": prediction}
