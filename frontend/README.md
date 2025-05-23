# 🤖 Smart Advisor Frontend

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-18+-blue?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-blue?style=flat&logo=tailwindcss)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Release](https://img.shields.io/badge/Release-v1.0-green)

Modern web interface for the Smart Advisor System, developed with Next.js 14, TypeScript, and Tailwind CSS. This frontend application provides an intuitive user interface for interacting with the Smart Advisor API.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
- [Development](#-development)
- [Project Structure](#-project-structure)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [API Integration](#-api-integration)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### Implemented
- [x] Next.js 14 App Router setup
- [x] TypeScript configuration
- [x] Project structure and organization
- [x] Development environment setup

### In Progress
- [ ] Modern and responsive interface
- [ ] Backend API integration
- [ ] Conversation history
- [ ] Light/dark theme support
- [ ] Mobile-optimized design

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **UI Library**: [React 18](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) (planned)
- **Testing**: [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/)
- **Deployment**: [Vercel](https://vercel.com/) (planned)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Git
- Backend API running (local or production)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/EmiFunes91/smart-advisor-app.git
cd smart-advisor-app/frontend
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Configure environment variables**
```bash
# Create .env.local file with:
NEXT_PUBLIC_API_URL=http://localhost:8000  # Development
# NEXT_PUBLIC_API_URL=https://smart-advisor-api-production.up.railway.app  # Production
```

4. **Start development server**
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

## 💻 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage

### Code Style

This project uses:
- ESLint for code linting
- Prettier for code formatting
- TypeScript for type checking

Run the linter:
```bash
npm run lint
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/              # App Router pages and layouts
│   │   ├── (auth)/      # Authentication routes
│   │   ├── (dashboard)/ # Dashboard routes
│   │   └── layout.tsx   # Root layout
│   ├── components/       # Reusable components
│   │   ├── ui/         # UI components
│   │   ├── forms/      # Form components
│   │   └── shared/     # Shared components
│   ├── lib/             # Utilities and configurations
│   │   ├── api/        # API client and hooks
│   │   ├── utils/      # Helper functions
│   │   └── constants/  # Constants and configs
│   ├── styles/          # Global styles
│   │   ├── globals.css # Global CSS
│   │   └── themes/     # Theme configurations
│   └── types/          # TypeScript type definitions
├── public/              # Static assets
│   ├── images/         # Image assets
│   └── fonts/          # Font files
├── tests/              # Test files
│   ├── unit/          # Unit tests
│   └── integration/   # Integration tests
├── .eslintrc.js       # ESLint configuration
├── .prettierrc        # Prettier configuration
├── next.config.js     # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Project dependencies
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Structure

- `tests/unit/` - Unit tests for components and utilities
- `tests/integration/` - Integration tests for API and features
- `tests/e2e/` - End-to-end tests (planned)

## 🚢 Deployment

### Production Build

```bash
npm run build
```

### Deployment to Vercel

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deployments are automatic on push to main branch

## 🔌 API Integration

The frontend communicates with the backend API through the following endpoints:

- `POST /api/ask` - Send questions to the advisor
- `GET /api/ask/history` - Get conversation history
- `GET /api/health` - Check API health status

For detailed API documentation, see:
- [API Reference](./backend/README.md)
- [Swagger UI](https://smart-advisor-api-production.up.railway.app/docs)
- [ReDoc](https://smart-advisor-api-production.up.railway.app/redoc)

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
