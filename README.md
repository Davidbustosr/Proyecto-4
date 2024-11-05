
# Proyecto de Reservas de Hoteles

Este proyecto es una API RESTful desarrollada para gestionar reservas en hoteles. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) y filtros avanzados para buscar reservas según diferentes criterios como hotel, tipo de habitación, rango de fechas, número de huéspedes, y estado de la reserva.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express.js**: Framework de servidor web para Node.js.
- **Swagger**: Herramienta de documentación para la API.
- **MongoDB** (opcional): Puedes integrar una base de datos para persistencia de datos.

## Características

- **Operaciones CRUD**: Permite crear, leer, actualizar y eliminar reservas.
- **Filtros Avanzados**: Filtrar reservas por hotel, tipo de habitación, rango de fechas, estado y número de huéspedes.
- **Documentación con Swagger**: Todos los endpoints están documentados con Swagger, accesible en `/api-docs`.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone git@github.com:Davidbustosr/Proyecto-4.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd Proyecto-4
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Crea un archivo `.env` en la raíz del proyecto y define el puerto del servidor:
   ```plaintext
   PORT=3000
   ```

## Ejecución

Inicia el servidor de desarrollo con el siguiente comando:
```bash
npm start
```

El servidor se iniciará en `http://localhost:3000`.

## Endpoints

### CRUD de Reservas

- **POST** `/api/reservas`: Crea una nueva reserva.
- **GET** `/api/reservas`: Obtiene la lista de todas las reservas.
- **GET** `/api/reservas/:id`: Obtiene una reserva específica por ID.
- **PUT** `/api/reservas/:id`: Actualiza una reserva existente por ID.
- **DELETE** `/api/reservas/:id`: Elimina una reserva existente por ID.

### Filtros

- **GET** `/api/reservas/filtrar/hotel?hotel=nombreHotel`: Filtra reservas por nombre de hotel.
- **GET** `/api/reservas/filtrar/fechas?fecha_inicio=YYYY-MM-DD&fecha_fin=YYYY-MM-DD`: Filtra reservas por rango de fechas.
- **GET** `/api/reservas/filtrar/tipo-habitacion?tipo_habitacion=tipo`: Filtra reservas por tipo de habitación.
- **GET** `/api/reservas/filtrar/estado?estado=pendiente|confirmada`: Filtra reservas por estado.
- **GET** `/api/reservas/filtrar/numero-huespedes?num_huespedes=N`: Filtra reservas por número de huéspedes.

### Documentación

La documentación de la API generada con Swagger está disponible en:
```
http://localhost:3000/api-docs
```

## Ejemplo de Solicitud con JSON

Para crear una reserva, puedes enviar una solicitud POST a `/api/reservas` con el siguiente cuerpo JSON:

```json
{
    "hotel": "Hotel Paraíso",
    "fecha": "2023-12-20",
    "tipoHabitacion": "doble",
    "numHuespedes": 2,
    "estado": "confirmada"
}
```

## Despliegue

Esta API se puede desplegar en servicios como [Render.com](https://render.com/) para crear una URL de producción y hacerla accesible en la web.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, sigue estos pasos:

1. Realiza un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

---

¡Gracias por visitar este proyecto! Si tienes preguntas o sugerencias, no dudes en contactarme.
