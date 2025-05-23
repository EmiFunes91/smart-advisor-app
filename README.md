# Smart Advisor App

## Descripción
Smart Advisor App es una aplicación web moderna que proporciona asesoramiento inteligente a través de una interfaz intuitiva y una API robusta. El proyecto está estructurado como una aplicación full-stack con frontend en React y backend en Python.

## Estructura del Proyecto
```
smart-advisor-app/
├── frontend/           # Aplicación React
│   ├── public/        # Archivos estáticos
│   └── src/           # Código fuente de React
├── backend/           # API Python
│   ├── app/          # Código fuente de la API
│   ├── requirements.txt  # Dependencias de Python
│   └── Procfile      # Configuración para despliegue
└── venv/             # Entorno virtual de Python
```

## Requisitos Previos
- Node.js (v14 o superior)
- Python 3.8 o superior
- Git

## Configuración del Entorno

### Backend
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

3. Iniciar el servidor de desarrollo:
```bash
python app/main.py
```

### Frontend
1. Instalar dependencias:
```bash
cd frontend
npm install
```

2. Iniciar el servidor de desarrollo:
```bash
npm start
```

## Documentación
- [Documentación de la API](./backend/README.api.es.md)
- [Documentación del Frontend](./frontend/README.md)

## Desarrollo
- El backend corre en `http://localhost:5000` por defecto
- El frontend corre en `http://localhost:3000` por defecto

## Contribución
1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles. 