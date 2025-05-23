# 🤖 Smart Advisor System

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat&logo=next.js)
![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-blue?style=flat&logo=fastapi)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-12+-blue?style=flat&logo=postgresql)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat&logo=typescript)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Release](https://img.shields.io/badge/Release-v1.0-green)

Un sistema moderno full-stack de asesoramiento inteligente que combina un backend robusto en FastAPI con un frontend en Next.js, proporcionando respuestas contextuales e historial de conversaciones.

> 🌐 URLs de Producción:
> - API Backend: [smart-advisor-api-production.up.railway.app](https://smart-advisor-api-production.up.railway.app)
> - Frontend: Próximamente
> 
> 📦 Última Versión: [v1.0](https://github.com/EmiFunes91/smart-advisor-app/releases/tag/v1.0)

## 📋 Índice

- [Características](#-características)
- [Stack Tecnológico](#-stack-tecnológico)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Comenzando](#-comenzando)
  - [Prerrequisitos](#prerrequisitos)
  - [Instalación](#instalación)
  - [Configuración del Entorno](#configuración-del-entorno)
- [Desarrollo](#-desarrollo)
- [Testing](#-testing)
- [Despliegue](#-despliegue)
- [Documentación de la API](#-documentación-de-la-api)
- [Contribución](#-contribución)
- [Licencia](#-licencia)

## ✨ Características

### Backend (FastAPI)
- [x] API RESTful con FastAPI
- [x] Persistencia en PostgreSQL
- [x] Documentación Swagger y ReDoc
- [x] Respuestas simuladas contextuales
- [x] Historial completo de interacciones
- [x] Soporte UTF-8 y manejo de errores
- [x] Despliegue en Railway

### Frontend (Next.js)
- [ ] Interfaz moderna y responsive
- [ ] Integración con la API backend
- [ ] Historial de conversaciones
- [ ] Soporte para temas claro/oscuro
- [ ] Diseño optimizado para móviles

## 🛠️ Stack Tecnológico

### Backend
- **Framework**: FastAPI 0.100+
- **Base de Datos**: PostgreSQL 12+
- **ORM**: SQLAlchemy
- **Despliegue**: Railway
- **Documentación**: Swagger/ReDoc

### Frontend
- **Framework**: Next.js 14+
- **Lenguaje**: TypeScript 5+
- **Biblioteca UI**: React 18+
- **Despliegue**: Vercel (planeado)
- **Estilos**: Tailwind CSS (planeado)

## 📁 Estructura del Proyecto

```
smart-advisor-app/
├── backend/               # Backend FastAPI
│   ├── app/              # Código principal de la API
│   │   ├── api/         # Endpoints de la API
│   │   ├── core/        # Funcionalidad core
│   │   ├── db/          # Modelos y migraciones
│   │   └── services/    # Lógica de negocio
│   ├── tests/           # Tests del backend
│   ├── requirements.txt  # Dependencias de Python
│   └── README.md        # Documentación del backend
├── frontend/             # Frontend Next.js
│   ├── src/             # Código fuente
│   │   ├── app/        # Páginas (App Router)
│   │   ├── components/ # Componentes React
│   │   ├── lib/        # Utilidades
│   │   └── styles/     # Estilos globales
│   ├── public/          # Assets estáticos
│   └── README.md        # Documentación del frontend
├── .github/             # Workflows de GitHub Actions
├── docs/               # Documentación del proyecto
└── README.md          # Este archivo
```

## 🚀 Comenzando

### Prerrequisitos

- Node.js 18+ y npm/yarn
- Python 3.8+ y pip
- PostgreSQL 12+
- Git

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/EmiFunes91/smart-advisor-app.git
cd smart-advisor-app
```

2. **Configuración del Backend**
```bash
cd backend
python -m venv venv
source venv/Scripts/activate  # Windows
# source venv/bin/activate    # Linux/Mac
pip install -r requirements.txt
```

3. **Configuración del Frontend**
```bash
cd frontend
npm install
# o
yarn install
```

### Configuración del Entorno

1. **Entorno Backend**
```bash
# backend/.env
DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/smartadvisor
OPENAI_API_KEY=tu-api-key-aqui  # Opcional
RAILWAY_API_URL=tu-url-railway  # Para producción
```

2. **Entorno Frontend**
```bash
# frontend/.env.local
NEXT_PUBLIC_API_URL=http://localhost:8000  # Desarrollo
# NEXT_PUBLIC_API_URL=https://tu-url-railway  # Producción
```

## 💻 Desarrollo

### Desarrollo Backend
```bash
cd backend
source venv/Scripts/activate  # Windows
# source venv/bin/activate    # Linux/Mac
uvicorn app.main:app --reload
```

### Desarrollo Frontend
```bash
cd frontend
npm run dev
# o
yarn dev
```

## 🧪 Testing

### Tests Backend
```bash
cd backend
source venv/Scripts/activate  # Windows
# source venv/bin/activate    # Linux/Mac
pytest
```

### Tests Frontend
```bash
cd frontend
npm test
# o
yarn test
```

## 🚢 Despliegue

### Backend (Railway)
1. Conectar el repositorio de GitHub con Railway
2. Configurar variables de entorno en el dashboard de Railway
3. Los despliegues son automáticos al hacer push a main

### Frontend (Vercel - Planeado)
1. Conectar el repositorio de GitHub con Vercel
2. Configurar variables de entorno
3. Los despliegues serán automáticos al hacer push a main

## 📚 Documentación de la API

- [Documentación del Backend](./backend/README.md)
- [Referencia de la API (Swagger)](https://smart-advisor-api-production.up.railway.app/docs)
- [Referencia de la API (ReDoc)](https://smart-advisor-api-production.up.railway.app/redoc)

## 🤝 Contribución

1. Haz fork del repositorio
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

Por favor, lee [CONTRIBUTING.md](CONTRIBUTING.md) para detalles sobre nuestro código de conducta y el proceso para enviarnos pull requests.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

> 🇬🇧 Prefer this in English? [View README in English](./README.md) 