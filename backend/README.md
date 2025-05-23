# 🤖 Smart Advisor API

![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-blue?style=flat&logo=fastapi)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-12+-blue?style=flat&logo=postgresql)
![Python](https://img.shields.io/badge/Python-3.8+-blue?style=flat&logo=python)
![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-2.0+-blue?style=flat&logo=python)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Release](https://img.shields.io/badge/Release-v1.0-green)

A robust RESTful API built with FastAPI and PostgreSQL, designed to power the Smart Advisor System. This backend provides intelligent responses, conversation history, and a comprehensive API for the frontend application.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
- [Development](#-development)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### Implemented
- [x] RESTful API with FastAPI
- [x] PostgreSQL persistence with SQLAlchemy
- [x] Swagger and ReDoc documentation
- [x] Contextual simulated responses
- [x] Complete interaction history
- [x] UTF-8 support and error handling
- [x] Railway deployment
- [x] Database migrations
- [x] Environment configuration
- [x] Logging system

### Planned
- [ ] OpenAI integration
- [ ] Authentication and roles
- [ ] Rate limiting
- [ ] Multi-language support
- [ ] Caching system
- [ ] Background tasks

## 🛠️ Tech Stack

- **Framework**: [FastAPI 0.100+](https://fastapi.tiangolo.com/)
- **Database**: [PostgreSQL 12+](https://www.postgresql.org/)
- **ORM**: [SQLAlchemy 2.0+](https://www.sqlalchemy.org/)
- **Migrations**: [Alembic](https://alembic.sqlalchemy.org/)
- **Testing**: [pytest](https://docs.pytest.org/)
- **Deployment**: [Railway](https://railway.app/)
- **Documentation**: [Swagger/ReDoc](https://fastapi.tiangolo.com/alternatives/)

## 🚀 Getting Started

### Prerequisites

- Python 3.8+ and pip
- PostgreSQL 12+
- Git
- Virtual environment tool (venv, conda, etc.)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/EmiFunes91/smart-advisor-app.git
cd smart-advisor-app/backend
```

2. **Create and activate virtual environment**
```bash
python -m venv venv
source venv/Scripts/activate  # Windows
# source venv/bin/activate    # Linux/Mac
```

3. **Install dependencies**
```bash
pip install -r requirements.txt
```

4. **Configure environment variables**
```bash
# Create .env file with:
DATABASE_URL=postgresql://user:password@localhost:5432/smartadvisor
OPENAI_API_KEY=your-api-key-here  # Optional
RAILWAY_API_URL=your-railway-url  # For production
```

5. **Initialize database**
```bash
PYTHONPATH=. python app/db/init_db.py
```

6. **Start development server**
```bash
uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000`

## 💻 Development

### Available Scripts

- `uvicorn app.main:app --reload` - Start development server
- `pytest` - Run tests
- `pytest --cov=app` - Run tests with coverage
- `alembic revision --autogenerate -m "message"` - Create new migration
- `alembic upgrade head` - Apply migrations

### Code Style

This project uses:
- Black for code formatting
- isort for import sorting
- flake8 for linting
- mypy for type checking

Run the formatters:
```bash
black .
isort .
flake8
mypy .
```

## 📁 Project Structure

```
backend/
├── app/
│   ├── api/              # API endpoints
│   │   ├── v1/          # API version 1
│   │   └── deps.py      # Dependencies
│   ├── core/            # Core functionality
│   │   ├── config.py    # Configuration
│   │   ├── security.py  # Security utilities
│   │   └── logging.py   # Logging setup
│   ├── db/              # Database
│   │   ├── base.py      # Base models
│   │   ├── session.py   # Database session
│   │   └── init_db.py   # Database initialization
│   ├── models/          # SQLAlchemy models
│   │   ├── user.py      # User model
│   │   └── chat.py      # Chat model
│   ├── schemas/         # Pydantic schemas
│   │   ├── user.py      # User schemas
│   │   └── chat.py      # Chat schemas
│   ├── services/        # Business logic
│   │   ├── chat.py      # Chat service
│   │   └── openai.py    # OpenAI service
│   └── main.py          # Application entry point
├── tests/               # Test files
│   ├── conftest.py      # Test configuration
│   ├── test_api/        # API tests
│   └── test_services/   # Service tests
├── alembic/             # Database migrations
│   ├── versions/        # Migration files
│   └── env.py           # Migration environment
├── requirements/        # Dependency files
│   ├── base.txt         # Base dependencies
│   ├── dev.txt          # Development dependencies
│   └── prod.txt         # Production dependencies
├── .env.example         # Example environment variables
├── .pre-commit-config.yaml  # Pre-commit hooks
└── README.md            # This file
```

## 📚 API Documentation

The API documentation is available at:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

### Main Endpoints

- `POST /api/v1/ask` - Send a question to the advisor
- `GET /api/v1/ask/history` - Get conversation history
- `GET /api/v1/health` - Check API health status

For detailed API documentation, see:
- [API Reference](./docs/api.md)
- [Swagger UI](https://smart-advisor-api-production.up.railway.app/docs)
- [ReDoc](https://smart-advisor-api-production.up.railway.app/redoc)

## 🧪 Testing

### Running Tests

```bash
# Run all tests
pytest

# Run tests with coverage
pytest --cov=app

# Run specific test file
pytest tests/test_api/test_chat.py

# Run tests with specific marker
pytest -m "integration"
```

### Test Structure

- `tests/test_api/` - API endpoint tests
- `tests/test_services/` - Service layer tests
- `tests/test_models/` - Model tests
- `tests/conftest.py` - Test fixtures and configuration

## 🚢 Deployment

### Production Build

```bash
# Install production dependencies
pip install -r requirements/prod.txt

# Start production server
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

### Deployment to Railway

1. Connect your GitHub repository to Railway
2. Configure environment variables in Railway dashboard
3. Deployments are automatic on push to main branch

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](../CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

---

> 🇪🇸 ¿Prefieres ver esto en español? [Ver README en español](./README.es.md) 