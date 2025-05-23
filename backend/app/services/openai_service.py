# from openai import OpenAI
# from app.config import settings

# client = OpenAI(api_key=settings.OPENAI_API_KEY)

async def get_openai_response(question: str) -> str:
    # Simulación local para evitar uso de tokens reales
    try:
        # Asegurarse de que la pregunta esté en UTF-8
        question = question.encode('utf-8').decode('utf-8')
        
        if "cliente" in question.lower():
            return "Puedes atraer más clientes mejorando tu perfil profesional, mostrando proyectos reales y participando activamente en comunidades técnicas."
        return "Esta es una respuesta simulada generada localmente."
    except Exception as e:
        # En caso de error de codificación, devolver un mensaje de error amigable
        return f"Lo siento, hubo un problema al procesar tu pregunta. Por favor, intenta nuevamente sin caracteres especiales."
