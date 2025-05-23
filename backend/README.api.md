# 🤖 Smart Advisor System

![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-blue?style=flat&logo=fastapi)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-12+-blue?style=flat&logo=postgresql)
![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat&logo=next.js)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Release](https://img.shields.io/badge/Release-v1.0-green)

Sistema completo de asistente inteligente que combina una API robusta con una interfaz web moderna.

> 🌐 Production URL: [smart-advisor-api-production.up.railway.app](https://smart-advisor-api-production.up.railway.app)
> 
> 📦 Latest Release: [v1.0](https://github.com/EmiFunes91/smart-advisor-api/releases/tag/v1.0)

---

## 🏗️ Project Structure

```
smart-advisor-app/
├── backend/               # API FastAPI (smart-advisor-api)
│   ├── app/              # Código principal de la API
│   ├── requirements.txt  # Dependencias de Python
│   └── README.md         # Documentación del backend
├── frontend/             # Aplicación web Next.js
│   ├── src/             # Código fuente
│   ├── public/          # Assets estáticos
│   └── README.md        # Documentación del frontend
├── README.md            # Este archivo
└── .gitignore           # Configuración global de Git
```

---

## 🚀 Features

### Backend (FastAPI)
- [x] API RESTful con FastAPI
- [x] Persistencia en PostgreSQL
- [x] Documentación Swagger y ReDoc
- [x] Respuestas simuladas contextuales
- [x] Historial completo de interacciones
- [x] Soporte UTF-8 y manejo de errores
- [x] Despliegue en Railway

### Frontend (Next.js) - En desarrollo
- [ ] Interfaz moderna y responsive
- [ ] Integración con la API backend
- [ ] Historial de conversaciones
- [ ] Soporte para temas claro/oscuro
- [ ] Diseño optimizado para móviles

---

## 🛠️ Quick Start

### Backend
```bash
cd backend
python -m venv venv
source venv/Scripts/activate  # Windows
# source venv/bin/activate    # Linux/Mac
pip install -r requirements.txt
PYTHONPATH=. python app/db/init_db.py
uvicorn app.main:app --reload
```

### Frontend (Próximamente)
```bash
cd frontend
npm install
npm run dev
```

---

## 🔮 Roadmap

### Backend
- [ ] Integración con OpenAI
- [ ] Autenticación y roles
- [ ] Rate limiting
- [ ] Soporte multiidioma

### Frontend
- [ ] Implementación inicial con Next.js
- [ ] Diseño de UI/UX
- [ ] Integración con backend
- [ ] Despliegue en Vercel

---

## 👨‍💻 Credits
Desarrollado por Emilio Funes

## 📄 License
Este proyecto se distribuye bajo licencia MIT.

> 🇪🇸 Prefer this in Spanish? [View README in Spanish](./README.es.md)
