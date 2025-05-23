# 🤖 Smart Advisor System

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat&logo=next.js)
![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-blue?style=flat&logo=fastapi)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-12+-blue?style=flat&logo=postgresql)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat&logo=typescript)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Release](https://img.shields.io/badge/Release-v1.0-green)

A modern full-stack intelligent advisor system that combines a robust FastAPI backend with a Next.js frontend, providing contextual responses and conversation history.

> 🌐 Production URLs:
> - Backend API: [smart-advisor-api-production.up.railway.app](https://smart-advisor-api-production.up.railway.app)
> - Frontend: Coming soon
> 
> 📦 Latest Release: [v1.0](https://github.com/EmiFunes91/smart-advisor-app/releases/tag/v1.0)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
- [Development](#-development)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [API Documentation](#-api-documentation)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### Backend (FastAPI)
- [x] RESTful API with FastAPI
- [x] PostgreSQL persistence
- [x] Swagger and ReDoc documentation
- [x] Contextual simulated responses
- [x] Complete interaction history
- [x] UTF-8 support and error handling
- [x] Railway deployment

### Frontend (Next.js)
- [ ] Modern and responsive interface
- [ ] Backend API integration
- [ ] Conversation history
- [ ] Light/dark theme support
- [ ] Mobile-optimized design

## 🛠️ Tech Stack

### Backend
- **Framework**: FastAPI 0.100+
- **Database**: PostgreSQL 12+
- **ORM**: SQLAlchemy
- **Deployment**: Railway
- **Documentation**: Swagger/ReDoc

### Frontend
- **Framework**: Next.js 14+
- **Language**: TypeScript 5+
- **UI Library**: React 18+
- **Deployment**: Vercel (planned)
- **Styling**: Tailwind CSS (planned)

## 📁 Project Structure

```
smart-advisor-app/
├── backend/               # FastAPI Backend
│   ├── app/              # Main API code
│   │   ├── api/         # API endpoints
│   │   ├── core/        # Core functionality
│   │   ├── db/          # Database models and migrations
│   │   └── services/    # Business logic
│   ├── tests/           # Backend tests
│   ├── requirements.txt  # Python dependencies
│   └── README.md        # Backend documentation
├── frontend/             # Next.js Frontend
│   ├── src/             # Source code
│   │   ├── app/        # App router pages
│   │   ├── components/ # React components
│   │   ├── lib/        # Utilities
│   │   └── styles/     # Global styles
│   ├── public/          # Static assets
│   └── README.md        # Frontend documentation
├── .github/             # GitHub Actions workflows
├── docs/               # Project documentation
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Python 3.8+ and pip
- PostgreSQL 12+
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/EmiFunes91/smart-advisor-app.git
cd smart-advisor-app
```

2. **Backend Setup**
```bash
cd backend
python -m venv venv
source venv/Scripts/activate  # Windows
# source venv/bin/activate    # Linux/Mac
pip install -r requirements.txt
```

3. **Frontend Setup**
```bash
cd frontend
npm install
# or
yarn install
```

### Environment Setup

1. **Backend Environment**
```bash
# backend/.env
DATABASE_URL=postgresql://user:password@localhost:5432/smartadvisor
OPENAI_API_KEY=your-api-key-here  # Optional
RAILWAY_API_URL=your-railway-url  # For production
```

2. **Frontend Environment**
```bash
# frontend/.env.local
NEXT_PUBLIC_API_URL=http://localhost:8000  # Development
# NEXT_PUBLIC_API_URL=https://your-railway-url  # Production
```

## 💻 Development

### Backend Development
```bash
cd backend
source venv/Scripts/activate  # Windows
# source venv/bin/activate    # Linux/Mac
uvicorn app.main:app --reload
```

### Frontend Development
```bash
cd frontend
npm run dev
# or
yarn dev
```

## 🧪 Testing

### Backend Tests
```bash
cd backend
source venv/Scripts/activate  # Windows
# source venv/bin/activate    # Linux/Mac
pytest
```

### Frontend Tests
```bash
cd frontend
npm test
# or
yarn test
```

## 🚢 Deployment

### Backend (Railway)
1. Connect your GitHub repository to Railway
2. Configure environment variables in Railway dashboard
3. Deployments are automatic on push to main

### Frontend (Vercel - Planned)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deployments will be automatic on push to main

## 📚 API Documentation

- [Backend API Documentation](./backend/README.md)
- [API Reference (Swagger)](https://smart-advisor-api-production.up.railway.app/docs)
- [API Reference (ReDoc)](https://smart-advisor-api-production.up.railway.app/redoc)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

> 🇪🇸 ¿Prefieres ver esto en español? [Ver README en español](./README.es.md) 