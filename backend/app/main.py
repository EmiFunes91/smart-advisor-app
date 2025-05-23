from fastapi import FastAPI
from fastapi.responses import JSONResponse
from app.routes import ask

app = FastAPI(
    title="Smart Advisor API",
    description="Asistente con IA para responder preguntas y registrar historial.",
    version="0.1.0"
)

# Ruta raíz para info general
@app.get("/", response_class=JSONResponse)
def root():
    return {
        "message": "Bienvenido a la Smart Advisor API.",
        "endpoints": {
            "POST /api/ask/": "Hacer una pregunta",
            "GET /api/ask/history": "Ver historial de interacciones",
            "/docs": "Documentación interactiva Swagger",
            "/redoc": "Documentación alternativa ReDoc"
        }
    }

# Montar las rutas principales con prefijo
app.include_router(ask.router, prefix="/api/ask", tags=["SmartAdvisor"])