from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from app.routes import ask
from app.db.init_db import init_db

app = FastAPI(
    title="Smart Advisor API",
    description="Asistente con IA para responder preguntas y registrar historial.",
    version="0.1.0",
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json"
)

# Configuración de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
    expose_headers=["*"]
)

# Inicializar la base de datos al arrancar
@app.on_event("startup")
async def startup_event():
    init_db()

# Ruta raíz para info general
@app.get("/", response_class=JSONResponse)
def root():
    return {
        "message": "Bienvenido a la Smart Advisor API.",
        "endpoints": {
            "POST /api/ask": "Hacer una pregunta",
            "GET /api/ask/history": "Ver historial de interacciones",
            "/docs": "Documentación interactiva Swagger",
            "/redoc": "Documentación alternativa ReDoc"
        }
    }

# Montar las rutas principales con prefijo
app.include_router(ask.router, prefix="/api/ask", tags=["SmartAdvisor"])