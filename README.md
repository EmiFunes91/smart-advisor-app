# 🤖 Smart Advisor API

API developed with **FastAPI + PostgreSQL**, designed to act as an intelligent assistant that answers questions and maintains interaction history.

> Currently in simulation mode to avoid OpenAI usage costs. Can be easily integrated with GPT-3.5 later.

---

## 🚀 Features

- [x] RESTful API with FastAPI
- [x] PostgreSQL persistence
- [x] Swagger (`/docs`) and Redoc (`/redoc`) documentation
- [x] Simulated question endpoint
- [x] Complete interaction history
- [ ] OpenAI integration (optional)

---

## 🧪 Available Endpoints

| Method | Endpoint              | Description                             |
|--------|-----------------------|-----------------------------------------|
| `GET`  | `/`                   | General API information                 |
| `POST` | `/api/ask/`           | Send a question to the assistant        |
| `GET`  | `/api/ask/history`    | Get question/answer history             |
| `GET`  | `/docs`               | Swagger documentation                   |
| `GET`  | `/redoc`              | Alternative documentation (ReDoc)       |

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

## 👨‍💻 Credits
Developed by Emilio Funes

## 📄 License
This project is distributed under the MIT license.

> 🇪🇸 Prefer this in Spanish? [View README in Spanish](./README.es.md)
