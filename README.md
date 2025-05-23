# Smart Advisor App

## Descripción
Smart Advisor App es una aplicación web moderna que proporciona asesoramiento inteligente a través de una interfaz intuitiva y una API robusta. El proyecto está estructurado como una aplicación full-stack con frontend en Next.js y backend en Python (FastAPI).

## Estructura del Proyecto
```
smart-advisor-app/
├── frontend/           # Aplicación Next.js
│   ├── public/        # Archivos estáticos
│   ├── src/           # Código fuente de Next.js
│   ├── .env.local     # Variables de entorno locales
│   └── next.config.js # Configuración de Next.js
├── backend/           # API Python (FastAPI)
│   ├── app/          # Código fuente de la API
│   ├── requirements.txt  # Dependencias de Python
│   └── Procfile      # Configuración para despliegue en Railway
└── venv/             # Entorno virtual de Python
```

## Requisitos Previos
- Node.js (v18 o superior)
- Python 3.8 o superior
- Git
- Cuenta en Railway (para backend)
- Cuenta en Vercel (opcional, para frontend)

## Configuración del Entorno

### Backend (FastAPI)
1. Crear y activar el entorno virtual:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
```

2. Instalar dependencias:
```bash
pip install -r requirements.txt
```

3. Configurar variables de entorno:
```bash
# Crear archivo .env en backend/
RAILWAY_API_URL=https://tu-app.railway.app
OPENAI_API_KEY=tu-api-key
```

4. Iniciar el servidor de desarrollo:
```bash
uvicorn app.main:app --reload
```

### Frontend (Next.js)
1. Instalar dependencias:
```bash
cd frontend
npm install
```

2. Configurar variables de entorno:
```bash
# Crear archivo .env.local en frontend/
NEXT_PUBLIC_API_URL=http://localhost:8000  # Desarrollo
# NEXT_PUBLIC_API_URL=https://tu-app.railway.app  # Producción
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

## Despliegue

### Backend (Railway)
1. Conectar el repositorio de GitHub con Railway
2. Configurar las variables de entorno en Railway:
   - `OPENAI_API_KEY`
   - `RAILWAY_API_URL`
3. El despliegue es automático al hacer push a la rama main

### Frontend (Vercel)
1. Conectar el repositorio de GitHub con Vercel
2. Configurar las variables de entorno:
   - `NEXT_PUBLIC_API_URL` (URL del backend en Railway)
3. El despliegue es automático al hacer push a la rama main

## Testing

### Backend
```bash
cd backend
# Activar entorno virtual
source venv/bin/activate  # En Windows: venv\Scripts\activate
# Ejecutar tests
pytest
```

### Frontend
```bash
cd frontend
# Ejecutar tests unitarios
npm test
# Ejecutar tests de integración
npm run test:integration
```

## Conexión entre Frontend y Backend

El frontend se comunica con el backend a través de la variable de entorno `NEXT_PUBLIC_API_URL`. Esta URL se configura automáticamente según el entorno:

- Desarrollo: `http://localhost:8000`
- Producción: URL del backend en Railway

La comunicación se realiza mediante llamadas HTTP a los endpoints documentados en `backend/README.api.es.md`.

## Documentación
- [Documentación de la API](./backend/README.api.es.md)
- [Documentación del Frontend](./frontend/README.md)

## Desarrollo
- El backend corre en `http://localhost:8000` por defecto
- El frontend corre en `http://localhost:3000` por defecto

## Contribución
1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles. 