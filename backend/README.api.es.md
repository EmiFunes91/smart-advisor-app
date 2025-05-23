# 🤖 Smart Advisor API

![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-blue?style=flat&logo=fastapi)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-12+-blue?style=flat&logo=postgresql)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Release](https://img.shields.io/badge/Release-v1.0-green)

API desarrollada con **FastAPI + PostgreSQL**, diseñada para actuar como un asistente inteligente que responde preguntas y guarda el historial de interacciones. Esta es una versión estable (v1.0) que proporciona una base sólida para interacciones inteligentes de preguntas y respuestas.

> Actualmente en modo simulado para evitar costos de uso de OpenAI. Puede integrarse fácilmente con GPT-3.5 más adelante.
> 
> 🌐 URL de Producción: [smart-advisor-api-production.up.railway.app](https://smart-advisor-api-production.up.railway.app)
> 
> 📦 Última Versión: [v1.0](https://github.com/EmiFunes91/smart-advisor-api/releases/tag/v1.0)

---

## 🚀 Características

- [x] API RESTful con FastAPI
- [x] Persistencia en PostgreSQL con timestamps UTC
- [x] Documentación Swagger (`/docs`) y Redoc (`/redoc`)
- [x] Endpoint de preguntas simuladas con respuestas contextuales
- [x] Historial completo de interacciones con manejo de errores
- [x] Soporte UTF-8 y manejo de caracteres especiales
- [x] Manejo robusto de errores y registro de logs
- [x] Despliegue en producción en Railway
- [ ] Integración con OpenAI (opcional)

---

## 🧪 Inicio Rápido

### Probar la API

Pruébala inmediatamente con curl:

```bash
curl -X POST https://smart-advisor-api-production.up.railway.app/api/ask/ \
  -H "Content-Type: application/json" \
  -d '{"question": "¿Cómo puedo encontrar clientes freelance?"}'
```

Respuesta esperada:
```json
{
  "answer": "Puedes atraer más clientes mejorando tu perfil profesional, mostrando proyectos reales y participando activamente en comunidades técnicas."
}
```

### Desarrollo Local

1. **Clonar el repositorio**
```bash
git clone https://github.com/emiliofbb/smart-advisor-api.git
cd smart-advisor-api
```

2. **Configurar entorno virtual**
```bash
python -m venv venv
source venv/Scripts/activate  # En Windows
# O en Linux/Mac:
# source venv/bin/activate
```

3. **Instalar dependencias**
```bash
pip install -r requirements.txt
```

4. **Configurar variables de entorno**
```bash
# Crear archivo .env con:
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/smartadvisor
OPENAI_API_KEY=sk-your-api-key-here  # Opcional
```

5. **Inicializar base de datos**
```bash
PYTHONPATH=. python app/db/init_db.py
```

6. **Ejecutar servidor**
```bash
uvicorn app.main:app --reload
```

---

## 🧪 Endpoints disponibles

| Método | Endpoint              | Descripción                             |
|--------|-----------------------|-----------------------------------------|
| `GET`  | `/`                   | Información general de la API           |
| `POST` | `/api/ask/`           | Enviar una pregunta al asistente (con soporte UTF-8) |
| `GET`  | `/api/ask/history`    | Obtener historial de preguntas/respuestas con timestamps UTC |
| `GET`  | `/docs`               | Documentación Swagger                   |
| `GET`  | `/redoc`              | Documentación alternativa (ReDoc)       |

> Nota: Todos los endpoints incluyen manejo robusto de errores y registro de logs. El endpoint `/api/ask/` proporciona respuestas simuladas contextuales, especialmente para preguntas relacionadas con clientes.

---

## 📁 Estructura del proyecto

```
smart_advisor_api/
├── app/
│   ├── main.py           # Configuración principal de FastAPI
│   ├── config.py         # Configuración y variables de entorno
│   ├── routes/
│   │   └── ask.py       # Endpoints de preguntas y historial
│   ├── services/
│   │   └── openai_service.py  # Servicio de IA (simulado)
│   ├── models/
│   │   ├── schemas.py   # Modelos Pydantic
│   │   └── models.py    # Modelos SQLAlchemy
│   └── db/
│       ├── database.py  # Configuración de base de datos
│       ├── deps.py      # Dependencias de base de datos
│       └── init_db.py   # Script de inicialización
├── requirements.txt      # Dependencias del proyecto
└── README.md            # Este archivo
```

## 🔮 Próximos Pasos

- **Integración Opcional con OpenAI** — Actualización sin problemas a GPT-3.5/4 mediante variable de entorno
- **Autenticación y Control de Acceso** — Planificación de autenticación de usuarios, límites de tasa y roles administrativos
- **Cliente Frontend** — Integración planificada con una interfaz moderna (ej. React o Next.js) para interacción con usuarios
- **CI/CD y Dockerización** — Automatización de despliegues con GitHub Actions y soporte Docker para staging y producción

## 👨‍💻 Créditos
Desarrollado por Emilio Funes

## 📄 Licencia
Este proyecto se distribuye bajo licencia MIT.