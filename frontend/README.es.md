# 🤖 Smart Advisor Frontend

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-18+-blue?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-blue?style=flat&logo=tailwindcss)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Release](https://img.shields.io/badge/Release-v1.0-green)

Interfaz web moderna para el Sistema Smart Advisor, desarrollada con Next.js 14, TypeScript y Tailwind CSS. Esta aplicación frontend proporciona una interfaz intuitiva para interactuar con la API de Smart Advisor.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Stack Tecnológico](#-stack-tecnológico)
- [Comenzando](#-comenzando)
  - [Prerrequisitos](#prerrequisitos)
  - [Instalación](#instalación)
  - [Configuración del Entorno](#configuración-del-entorno)
- [Desarrollo](#-desarrollo)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Pruebas](#-pruebas)
- [Despliegue](#-despliegue)
- [Integración con API](#-integración-con-api)
- [Contribución](#-contribución)
- [Licencia](#-licencia)

## ✨ Características

### Implementadas
- [x] Configuración de Next.js 14 App Router
- [x] Configuración de TypeScript
- [x] Estructura y organización del proyecto
- [x] Configuración del entorno de desarrollo

### En Progreso
- [ ] Interfaz moderna y responsiva
- [ ] Integración con API backend
- [ ] Historial de conversaciones
- [ ] Soporte para tema claro/oscuro
- [ ] Diseño optimizado para móviles

## 🛠️ Stack Tecnológico

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Lenguaje**: [TypeScript 5](https://www.typescriptlang.org/)
- **Biblioteca UI**: [React 18](https://reactjs.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Gestión de Estado**: [Zustand](https://github.com/pmndrs/zustand) (planeado)
- **Pruebas**: [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/)
- **Despliegue**: [Vercel](https://vercel.com/) (planeado)

## 🚀 Comenzando

### Prerrequisitos

- Node.js 18+ y npm/yarn
- Git
- API backend en ejecución (local o producción)

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/EmiFunes91/smart-advisor-app.git
cd smart-advisor-app/frontend
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Configurar variables de entorno**
```bash
# Crear archivo .env.local con:
NEXT_PUBLIC_API_URL=http://localhost:8000  # Desarrollo
# NEXT_PUBLIC_API_URL=https://smart-advisor-api-production.up.railway.app  # Producción
```

4. **Iniciar servidor de desarrollo**
```bash
npm run dev
# o
yarn dev
```

La aplicación estará disponible en `http://localhost:3000`

## 💻 Desarrollo

### Scripts Disponibles

- `npm run dev` - Iniciar servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Iniciar servidor de producción
- `npm run lint` - Ejecutar ESLint
- `npm run test` - Ejecutar pruebas
- `npm run test:watch` - Ejecutar pruebas en modo observador
- `npm run test:coverage` - Ejecutar pruebas con cobertura

### Estilo de Código

Este proyecto utiliza:
- ESLint para linting de código
- Prettier para formateo de código
- TypeScript para verificación de tipos

Ejecutar el linter:
```bash
npm run lint
```

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── app/              # Páginas y layouts del App Router
│   │   ├── (auth)/      # Rutas de autenticación
│   │   ├── (dashboard)/ # Rutas del dashboard
│   │   └── layout.tsx   # Layout principal
│   ├── components/       # Componentes reutilizables
│   │   ├── ui/         # Componentes de UI
│   │   ├── forms/      # Componentes de formularios
│   │   └── shared/     # Componentes compartidos
│   ├── lib/             # Utilidades y configuraciones
│   │   ├── api/        # Cliente API y hooks
│   │   ├── utils/      # Funciones auxiliares
│   │   └── constants/  # Constantes y configuraciones
│   ├── styles/          # Estilos globales
│   │   ├── globals.css # CSS global
│   │   └── themes/     # Configuraciones de temas
│   └── types/          # Definiciones de tipos TypeScript
├── public/              # Activos estáticos
│   ├── images/         # Imágenes
│   └── fonts/          # Fuentes
├── tests/              # Archivos de prueba
│   ├── unit/          # Pruebas unitarias
│   └── integration/   # Pruebas de integración
├── .eslintrc.js       # Configuración de ESLint
├── .prettierrc        # Configuración de Prettier
├── next.config.js     # Configuración de Next.js
├── tailwind.config.js # Configuración de Tailwind CSS
├── tsconfig.json      # Configuración de TypeScript
└── package.json       # Dependencias del proyecto
```

## 🧪 Pruebas

### Ejecutar Pruebas

```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas en modo observador
npm run test:watch

# Ejecutar pruebas con cobertura
npm run test:coverage
```

### Estructura de Pruebas

- `tests/unit/` - Pruebas unitarias de componentes y utilidades
- `tests/integration/` - Pruebas de integración de API y características
- `tests/e2e/` - Pruebas end-to-end (planeado)

## 🚢 Despliegue

### Construcción para Producción

```bash
npm run build
```

### Despliegue en Vercel

1. Conectar tu repositorio de GitHub a Vercel
2. Configurar variables de entorno en el panel de Vercel
3. Los despliegues son automáticos al hacer push a la rama main

## 🔌 Integración con API

El frontend se comunica con la API backend a través de los siguientes endpoints:

- `POST /api/ask` - Enviar preguntas al asesor
- `GET /api/ask/history` - Obtener historial de conversaciones
- `GET /api/health` - Verificar estado de la API

Para documentación detallada de la API, ver:
- [Referencia de API](./backend/README.md)
- [Swagger UI](https://smart-advisor-api-production.up.railway.app/docs)
- [ReDoc](https://smart-advisor-api-production.up.railway.app/redoc)

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