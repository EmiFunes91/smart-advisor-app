# 🤖 Smart Advisor API

API desarrollada con **FastAPI + PostgreSQL**, diseñada para actuar como un asistente inteligente que responde preguntas y guarda el historial de interacciones.

> Actualmente en modo simulado para evitar costos de uso de OpenAI. Puede integrarse fácilmente con GPT-3.5 más adelante.

---

## 🚀 Características

- [x] API RESTful con FastAPI
- [x] Persistencia en PostgreSQL
- [x] Documentación Swagger (`/docs`) y Redoc (`/redoc`)
- [x] Endpoint de preguntas simuladas
- [x] Historial completo de interacciones
- [ ] Integración con OpenAI (opcional)

---

## 🧪 Endpoints disponibles

| Método | Endpoint              | Descripción                             |
|--------|-----------------------|-----------------------------------------|
| `GET`  | `/`                   | Información general de la API           |
| `POST` | `/api/ask/`           | Enviar una pregunta al asistente       |
| `GET`  | `/api/ask/history`    | Obtener historial de preguntas/respuestas |
| `GET`  | `/docs`               | Documentación Swagger                   |
| `GET`  | `/redoc`              | Documentación alternativa (ReDoc)       |

---

## 🛠️ Requisitos

- Python 3.10+
- PostgreSQL 12+
- Pipenv o entorno virtual
- OpenAI API Key (opcional)

---

## ⚙️ Instalación y ejecución local

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

## 👨‍💻 Créditos
Desarrollado por Emilio Funes

## 📄 Licencia
Este proyecto se distribuye bajo licencia MIT.