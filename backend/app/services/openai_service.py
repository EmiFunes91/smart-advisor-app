# from openai import OpenAI
# from app.config import settings

# client = OpenAI(api_key=settings.OPENAI_API_KEY)

async def get_openai_response(question: str) -> str:
    # Simulación local para evitar uso de tokens reales
    try:
        # Asegurarse de que la pregunta esté en UTF-8
        question = question.encode('utf-8').decode('utf-8')
        question_lower = question.lower()
        
        # Respuestas simuladas para diferentes tipos de preguntas
        if "cliente" in question_lower:
            return "Para atraer más clientes, te recomiendo:\n1. Mejorar tu perfil profesional\n2. Mostrar proyectos reales\n3. Participar activamente en comunidades técnicas\n4. Ofrecer valor a través de contenido útil"
        
        elif "inteligencia artificial" in question_lower or "ia" in question_lower:
            return "La Inteligencia Artificial es un campo de la informática que se centra en crear sistemas capaces de realizar tareas que normalmente requieren inteligencia humana. En esta aplicación, estamos usando OpenAI para procesar y responder preguntas de manera inteligente."
        
        elif "cómo funciona" in question_lower or "funciona esta app" in question_lower:
            return "Esta aplicación funciona de la siguiente manera:\n1. Recibe tu pregunta a través de la interfaz web\n2. La procesa usando un modelo de IA (actualmente en modo simulación)\n3. Genera una respuesta relevante\n4. Guarda la interacción en una base de datos para referencia futura"
        
        elif "tecnología" in question_lower or "stack" in question_lower:
            return "Esta aplicación está construida con:\n- Frontend: Next.js, React, Chakra UI\n- Backend: FastAPI, Python\n- Base de datos: SQLite\n- IA: OpenAI (cuando se active la API key)"
        
        elif "error" in question_lower or "problema" in question_lower:
            return "Si estás experimentando algún problema, por favor:\n1. Verifica tu conexión a internet\n2. Asegúrate de que el backend esté corriendo en el puerto 8000\n3. Revisa la consola del navegador para errores\n4. Contacta al equipo de soporte si el problema persiste"
        
        # Respuesta por defecto
        return "Esta es una respuesta simulada del sistema en modo desarrollo. Cuando se active la API key de OpenAI, recibirás respuestas más detalladas y personalizadas. Por ahora, puedes probar preguntas sobre clientes, inteligencia artificial, cómo funciona la app, tecnología o errores para ver respuestas simuladas más específicas."
    
    except Exception as e:
        return f"Lo siento, hubo un problema al procesar tu pregunta. Por favor, intenta nuevamente sin caracteres especiales."
