# 🤖 Smart Advisor API

![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-blue?style=flat&logo=fastapi)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-12+-blue?style=flat&logo=postgresql)
![Python](https://img.shields.io/badge/Python-3.8+-blue?style=flat&logo=python)
![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-2.0+-blue?style=flat&logo=python)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Release](https://img.shields.io/badge/Release-v1.0-green)

Una robusta API RESTful construida con FastAPI y PostgreSQL, diseñada para potenciar el Sistema Smart Advisor. Este backend proporciona respuestas inteligentes, historial de conversaciones y una API completa para la aplicación frontend.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Stack Tecnológico](#-stack-tecnológico)
- [Comenzando](#-comenzando)
  - [Prerrequisitos](#prerrequisitos)
  - [Instalación](#instalación)
  - [Configuración del Entorno](#configuración-del-entorno)
- [Desarrollo](#-desarrollo)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Documentación de la API](#-documentación-de-la-api)
- [Pruebas](#-pruebas)
- [Despliegue](#-despliegue)
- [Contribución](#-contribución)
- [Licencia](#-licencia)

## ✨ Características

### Implementadas
- [x] API RESTful con FastAPI
- [x] Persistencia PostgreSQL con SQLAlchemy
- [x] Documentación Swagger y ReDoc
- [x] Respuestas simuladas contextuales
- [x] Historial completo de interacciones
- [x] Soporte UTF-8 y manejo de errores
- [x] Despliegue en Railway
- [x] Migraciones de base de datos
- [x] Configuración de entorno
- [x] Sistema de logging

### Planeadas
- [ ] Integración con OpenAI
- [ ] Autenticación y roles
- [ ] Límite de tasa
- [ ] Soporte multiidioma
- [ ] Sistema de caché
- [ ] Tareas en segundo plano

## 🛠️ Stack Tecnológico

- **Framework**: [FastAPI 0.100+](https://fastapi.tiangolo.com/)
- **Base de Datos**: [PostgreSQL 12+](https://www.postgresql.org/)
- **ORM**: [SQLAlchemy 2.0+](https://www.sqlalchemy.org/)
- **Migraciones**: [Alembic](https://alembic.sqlalchemy.org/)
- **Pruebas**: [pytest](https://docs.pytest.org/)
- **Despliegue**: [Railway](https://railway.app/)
- **Documentación**: [Swagger/ReDoc](https://fastapi.tiangolo.com/alternatives/)

## 🚀 Comenzando

### Prerrequisitos

- Python 3.8+ y pip
- PostgreSQL 12+
- Git
- Herramienta de entorno virtual (venv, conda, etc.)

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/EmiFunes91/smart-advisor-app.git
cd smart-advisor-app/backend
```

2. **Crear y activar entorno virtual**
```bash
python -m venv venv
source venv/Scripts/activate  # Windows
# source venv/bin/activate    # Linux/Mac
```

3. **Instalar dependencias**
```bash
pip install -r requirements.txt
```

4. **Configurar variables de entorno**
```bash
# Crear archivo .env con:
DATABASE_URL=postgresql://user:password@localhost:5432/smartadvisor
OPENAI_API_KEY=your-api-key-here  # Opcional
RAILWAY_API_URL=your-railway-url  # Para producción
```

5. **Inicializar base de datos**
```bash
PYTHONPATH=. python app/db/init_db.py
```

6. **Iniciar servidor de desarrollo**
```bash
uvicorn app.main:app --reload
```

La API estará disponible en `http://localhost:8000`

## 💻 Desarrollo

### Scripts Disponibles

- `uvicorn app.main:app --reload` - Iniciar servidor de desarrollo
- `pytest` - Ejecutar pruebas
- `pytest --cov=app` - Ejecutar pruebas con cobertura
- `alembic revision --autogenerate -m "message"` - Crear nueva migración
- `alembic upgrade head` - Aplicar migraciones

### Estilo de Código

Este proyecto utiliza:
- Black para formateo de código
- isort para ordenamiento de imports
- flake8 para linting
- mypy para verificación de tipos

Ejecutar los formateadores:
```bash
black .
isort .
flake8
mypy .
```

## 📁 Estructura del Proyecto

```
backend/
├── app/
│   ├── api/              # Endpoints de la API
│   │   ├── v1/          # API versión 1
│   │   └── deps.py      # Dependencias
│   ├── core/            # Funcionalidad core
│   │   ├── config.py    # Configuración
│   │   ├── security.py  # Utilidades de seguridad
│   │   └── logging.py   # Configuración de logging
│   ├── db/              # Base de datos
│   │   ├── base.py      # Modelos base
│   │   ├── session.py   # Sesión de base de datos
│   │   └── init_db.py   # Inicialización de base de datos
│   ├── models/          # Modelos SQLAlchemy
│   │   ├── user.py      # Modelo de usuario
│   │   └── chat.py      # Modelo de chat
│   ├── schemas/         # Esquemas Pydantic
│   │   ├── user.py      # Esquemas de usuario
│   │   └── chat.py      # Esquemas de chat
│   ├── services/        # Lógica de negocio
│   │   ├── chat.py      # Servicio de chat
│   │   └── openai.py    # Servicio de OpenAI
│   └── main.py          # Punto de entrada de la aplicación
├── tests/               # Archivos de prueba
│   ├── conftest.py      # Configuración de pruebas
│   ├── test_api/        # Pruebas de API
│   └── test_services/   # Pruebas de servicios
├── alembic/             # Migraciones de base de datos
│   ├── versions/        # Archivos de migración
│   └── env.py           # Entorno de migración
├── requirements/        # Archivos de dependencias
│   ├── base.txt         # Dependencias base
│   ├── dev.txt          # Dependencias de desarrollo
│   └── prod.txt         # Dependencias de producción
├── .env.example         # Variables de entorno de ejemplo
├── .pre-commit-config.yaml  # Hooks de pre-commit
└── README.md            # Este archivo
```

## 📚 Documentación de la API

La documentación de la API está disponible en:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

### Endpoints Principales

- `POST /api/v1/ask` - Enviar una pregunta al asesor
- `GET /api/v1/ask/history` - Obtener historial de conversaciones
- `GET /api/v1/health` - Verificar estado de la API

Para documentación detallada de la API, ver:
- [Referencia de API](./docs/api.md)
- [Swagger UI](https://smart-advisor-api-production.up.railway.app/docs)
- [ReDoc](https://smart-advisor-api-production.up.railway.app/redoc)

## 🧪 Pruebas

### Ejecutar Pruebas

```bash
# Ejecutar todas las pruebas
pytest

# Ejecutar pruebas con cobertura
pytest --cov=app

# Ejecutar archivo de prueba específico
pytest tests/test_api/test_chat.py

# Ejecutar pruebas con marcador específico
pytest -m "integration"
```

### Estructura de Pruebas

- `tests/test_api/` - Pruebas de endpoints de API
- `tests/test_services/` - Pruebas de capa de servicios
- `tests/test_models/` - Pruebas de modelos
- `tests/conftest.py` - Fixtures y configuración de pruebas

## 🚢 Despliegue

### Construcción para Producción

```bash
# Instalar dependencias de producción
pip install -r requirements/prod.txt

# Iniciar servidor de producción
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

### Despliegue en Railway

1. Conectar tu repositorio de GitHub a Railway
2. Configurar variables de entorno en el panel de Railway
3. Los despliegues son automáticos al hacer push a la rama main

## 🤝 Contribución

1. Hacer fork del repositorio
2. Crear tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Hacer commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Hacer push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

Por favor, lee [CONTRIBUTING.md](../CONTRIBUTING.md) para detalles sobre nuestro código de conducta y el proceso para enviar pull requests.

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](../LICENSE) para más detalles.

---

> 🇬🇧 Prefer to read this in English? [View README in English](./README.md)