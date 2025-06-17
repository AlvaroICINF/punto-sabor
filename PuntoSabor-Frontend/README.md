# PuntoSabor

## Descripción

PuntoSabor es una aplicación web que permite a los usuarios buscar y explorar restaurantes locales. La plataforma facilita la búsqueda de establecimientos gastronómicos por nombre, especialidad y otros filtros, mostrando información detallada como menús, horarios, ubicación y datos de contacto.

## Tecnologías Utilizadas

### Frontend
- **React**: Framework de JavaScript para la construcción de interfaces de usuario
- **Vite**: Herramienta de construcción que proporciona un entorno de desarrollo más rápido
- **React Router DOM**: Manejo de rutas en la aplicación
- **Axios**: Cliente HTTP para realizar peticiones a la API
- **Lucide React**: Biblioteca de iconos para React
- **CSS**: Estilos personalizados sin frameworks adicionales

### Backend
- **Node.js**: Entorno de ejecución para JavaScript del lado del servidor
- **Express**: Framework web para Node.js
- **Firebase/Firestore**: Base de datos NoSQL en la nube
- **Firebase Authentication**: Sistema de autenticación de usuarios
- **Dotenv**: Manejo de variables de entorno
- **Helmet**: Middleware para seguridad de cabeceras HTTP
- **CORS**: Middleware para manejo de Cross-Origin Resource Sharing
- **Express Rate Limit**: Limitación de solicitudes a la API

## Estructura de la Base de Datos

La aplicación utiliza Firebase/Firestore como base de datos NoSQL con la siguiente estructura:

### Colección `localFood` (Restaurantes)
Almacena la información de los restaurantes:
- `id`: Identificador único
- `name`: Nombre del restaurante
- `specialty`: Especialidad culinaria
- `address`: Dirección física
- `phone`: Número de teléfono
- `website`: Sitio web (opcional)
- `uptime`: Horario de atención
- `priceRange`: Rango de precios
- `services`: Servicios disponibles (delivery, reservas, etc.)
- `createdAt`: Fecha de creación
- `updatedAt`: Fecha de actualización

### Subcolección `dishes` (de localFood)
Almacena los platos de cada restaurante:
- `id`: Identificador único
- `name`: Nombre del plato
- `description`: Descripción del plato
- `price`: Precio
- `category`: Categoría del plato
- `featured`: Indica si es un plato destacado
- `createdAt`: Fecha de creación
- `updatedAt`: Fecha de actualización

### Colección `users`
Almacena la información de los usuarios:
- `uid`: Identificador único del usuario
- `name`: Nombre del usuario
- `email`: Correo electrónico
- `role`: Rol del usuario (user/admin)
- `createdAt`: Fecha de creación

## Uso de Inteligencia Artificial en el Desarrollo

En el desarrollo de PuntoSabor se utilizó la inteligencia artificial de las siguientes maneras:

1. **Generación de código**: Se utilizaron herramientas de IA para generar partes del código base, especialmente para estructuras repetitivas y configuraciones estándar.

2. **Diseño de la interfaz**: La IA ayudó a crear estilos CSS y componentes visuales que siguen las mejores prácticas de diseño.

3. **Optimización de consultas**: Se utilizaron sugerencias de IA para optimizar las consultas a la base de datos Firestore.

4. **Depuración**: La IA asistió en la identificación y resolución de errores durante el desarrollo.

5. **Documentación**: Este README y otros documentos del proyecto fueron creados con asistencia de IA para asegurar claridad y completitud.

6. **Estructura del proyecto**: La organización de archivos y carpetas siguió recomendaciones basadas en análisis de IA de proyectos similares.

## Cómo Ejecutar el Proyecto

### Requisitos Previos
- Node.js (versión recomendada: 18.x o superior)
- Cuenta en Firebase y proyecto configurado
- Variables de entorno configuradas

### Instalación y Ejecución

#### Backend
```bash
cd PuntoSabor-Backend
npm install
npm run dev
```

#### Frontend
```bash
cd PuntoSabor-Frontend
npm install
npm run dev
```

El backend se ejecutará en `http://localhost:3000` y el frontend en `http://localhost:5173` por defecto.

## Configuración

### Variables de Entorno
Asegúrate de configurar las siguientes variables de entorno en tu archivo `.env`:

```env
# Firebase Configuration
FIREBASE_API_KEY=tu_api_key
FIREBASE_AUTH_DOMAIN=tu_auth_domain
FIREBASE_PROJECT_ID=tu_project_id
FIREBASE_STORAGE_BUCKET=tu_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
FIREBASE_APP_ID=tu_app_id

# Server Configuration
PORT=3000
NODE_ENV=development
```

## Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Contacto

Para preguntas o soporte, contacta al equipo de desarrollo.
