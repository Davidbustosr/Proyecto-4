// Importación de módulos necesarios
const express = require('express');
const app = express();
require('dotenv').config(); // Cargar variables de entorno desde el archivo .env
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Configuración de opciones de Swagger para la documentación de la API
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Reservas de Hoteles', // Título de la documentación de la API
            version: '1.0.0', // Versión de la API
            description: 'API para gestionar reservas en hoteles', // Descripción de la API
        },
        servers: [
            {
                url: 'http://localhost:3000', // URL del servidor
            },
        ],
    },
    apis: ['./routes/*.js'], // Ubicación de las rutas para documentar
};

// Generar la documentación con Swagger
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Configuración de la ruta para servir la documentación de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Definición del puerto del servidor, obteniendo el valor de las variables de entorno o usando el puerto 3000 por defecto
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware para manejar JSON en las solicitudes

// Ruta de prueba para verificar el estado del servidor
app.get('/test', (req, res) => {
    res.send('El servidor está funcionando');
});

// Importar y usar las rutas de reservas
const reservasRoutes = require('./routes/reservas');
app.use('/api/reservas', reservasRoutes); // Agregar el prefijo /api/reservas para las rutas

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});