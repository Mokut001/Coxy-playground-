from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Coxy Plutus API")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

class CompileRequest(BaseModel):
    source: str
    target: str

class LogicRequest(BaseModel):
    industry: str
    fields: list

@app.post("/api/compiler/compile")
def compile_plutus(req: CompileRequest):
    # Simulated comp logs
    return {
        "logs": "Compiling Plutus Core...\n[GHC] Validator defined.\n[INFO] Saving to artifact directory...\n[SUCCESS] Build complete.",
        "artifacts": {"plutus": "DUMMY_PLUTUS_HEX", "json": "{}"}
    }

@app.post("/api/logic/generate")
def generate_logic(req: LogicRequest):
    # Mapping industries to Haskell templates
    if req.industry == "Marketplace":
        code = """
module ValidatorLogic where
-- Generated Marketplace logic
-- Fields: """ + ", ".join(req.fields) + """
        """
        return {"code": code}
    return {"code": "-- Base Logic"}

@app.get("/api/templates")
def get_templates():
    return [{"id": "vesting", "name": "Vesting"}, {"id": "auction", "name": "English Auction"}]