# 🤖 Smart Advisor API

![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-blue?style=flat&logo=fastapi)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-12+-blue?style=flat&logo=postgresql)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

API developed with **FastAPI + PostgreSQL**, designed to act as an intelligent assistant that answers questions and maintains interaction history.

> Currently in simulation mode to avoid OpenAI usage costs. Can be easily integrated with GPT-3.5 later.
> 
> 🌐 Deployed at: [smart-advisor-api-production.up.railway.app](https://smart-advisor-api-production.up.railway.app)

---

## 🚀 Features

- [x] RESTful API with FastAPI
- [x] PostgreSQL persistence with UTC timestamps
- [x] Swagger (`/docs`) and Redoc (`/redoc`) documentation
- [x] Simulated question endpoint with context-aware responses
- [x] Complete interaction history with error handling
- [x] UTF-8 support and special character handling
- [x] Robust error handling and logging
- [ ] OpenAI integration (optional)

---

## 🧪 Available Endpoints

| Method | Endpoint              | Description                             |
|--------|-----------------------|-----------------------------------------|
| `GET`  | `/`                   | General API information                 |
| `POST` | `/api/ask/`           | Send a question to the assistant (with UTF-8 support) |
| `GET`  | `/api/ask/history`    | Get question/answer history with UTC timestamps |
| `GET`  | `/docs`               | Swagger documentation                   |
| `GET`  | `/redoc`              | Alternative documentation (ReDoc)       |

> Note: All endpoints include robust error handling and logging. The `/api/ask/` endpoint provides context-aware simulated responses, especially for client-related questions.

---

## 🧪 Quick Test

Try the API right away with curl:

```bash
curl -X POST https://smart-advisor-api-production.up.railway.app/api/ask/ \
  -H "Content-Type: application/json" \
  -d '{"question": "How can I find freelance clients?"}'
```

Expected response:
```json
{
  "answer": "Puedes atraer más clientes mejorando tu perfil profesional, mostrando proyectos reales y participando activamente en comunidades técnicas."
}
```

---

## 🛠️ Requirements

- Python 3.10+
- PostgreSQL 12+
- Pipenv or virtual environment
- OpenAI API Key (optional)

---

## ⚙️ Installation and Local Execution

1. **Clone the repository**
```bash
git clone https://github.com/emiliofbb/smart-advisor-api.git
cd smart-advisor-api
```

2. **Set up virtual environment**
```bash
python -m venv venv
source venv/Scripts/activate  # On Windows
# Or on Linux/Mac:
# source venv/bin/activate
```

3. **Install dependencies**
```bash
pip install -r requirements.txt
```

4. **Configure environment variables**
```bash
# Create .env file with:
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/smartadvisor
OPENAI_API_KEY=sk-your-api-key-here  # Optional
```

5. **Initialize database**
```bash
PYTHONPATH=. python app/db/init_db.py
```

6. **Run server**
```bash
uvicorn app.main:app --reload
```

## 📁 Project Structure

```
smart_advisor_api/
├── app/
│   ├── main.py           # FastAPI main configuration
│   ├── config.py         # Environment configuration
│   ├── routes/
│   │   └── ask.py       # Question and history endpoints
│   ├── services/
│   │   └── openai_service.py  # AI service (simulated)
│   ├── models/
│   │   ├── schemas.py   # Pydantic models
│   │   └── models.py    # SQLAlchemy models
│   └── db/
│       ├── database.py  # Database configuration
│       ├── deps.py      # Database dependencies
│       └── init_db.py   # Initialization script
├── requirements.txt      # Project dependencies
└── README.md            # This file
```

## 🔮 Next Steps

- **Optional OpenAI Integration** — Seamless upgrade to GPT-3.5/4 by switching the environment variable
- **Authentication & Role-Based Access** — Future roadmap includes user auth, rate limiting, and admin roles
- **Frontend Client** — Planned integration with a modern UI (e.g., React or Next.js) for user-facing interaction
- **CI/CD & Dockerization** — Automate deployments with GitHub Actions and Docker support for staging and production

## 👨‍💻 Credits
Developed by Emilio Funes

## 📄 License
This project is distributed under the MIT license.

> 🇪🇸 Prefer this in Spanish? [View README in Spanish](./README.es.md)
