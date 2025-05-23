# Registro de Cambios

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-03-20

### Añadido
- Backend:
  - API RESTful con FastAPI
  - Persistencia en PostgreSQL con SQLAlchemy
  - Documentación Swagger y ReDoc
  - Respuestas simuladas contextuales
  - Historial completo de interacciones
  - Soporte UTF-8 y manejo de errores
  - Despliegue en Railway
  - Migraciones de base de datos
  - Configuración de entorno
  - Sistema de logging

- Frontend:
  - Configuración inicial de Next.js 14 App Router
  - Configuración de TypeScript
  - Estructura base del proyecto
  - Configuración del entorno de desarrollo
  - Componentes base para la interfaz de usuario
  - Integración inicial con la API backend

### Cambios
- Estructura del proyecto organizada en backend y frontend
- Documentación completa en español e inglés
- Configuración de despliegue en Railway para el backend

### Planeado
- Backend:
  - Integración con OpenAI
  - Autenticación y roles
  - Límite de tasa
  - Soporte multiidioma
  - Sistema de caché
  - Tareas en segundo plano

- Frontend:
  - Interfaz moderna y responsiva
  - Integración completa con API backend
  - Historial de conversaciones
  - Soporte para tema claro/oscuro
  - Diseño optimizado para móviles
  - Despliegue en Vercel

## [0.1.0] - 2024-03-15

### Añadido
- Estructura inicial del proyecto
- Configuración básica de FastAPI
- Configuración básica de Next.js
- Documentación inicial
- Licencia MIT 