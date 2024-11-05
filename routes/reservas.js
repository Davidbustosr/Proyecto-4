// Importación de módulos y configuración de router de Express
const express = require('express');
const router = express.Router();

// Importación de funciones desde el controlador de reservas
const { 
    crearReserva, 
    obtenerReservas, 
    actualizarReserva, 
    eliminarReserva, 
    obtenerReservaEspecifica,
    filtrarPorHotel,
    filtrarPorRangoFechas,
    filtrarPorTipoHabitacion,
    filtrarPorEstado,
    filtrarPorNumeroHuespedes 
} = require('../controllers/reservasController');

/**
 * @swagger
 * /api/reservas:
 *   post:
 *     summary: Crea una nueva reserva
 *     description: Permite crear una reserva en un hotel.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hotel:
 *                 type: string
 *                 example: "Hotel Paraíso"
 *               fecha:
 *                 type: string
 *                 format: date
 *                 example: "2023-12-20"
 *               tipoHabitacion:
 *                 type: string
 *                 example: "doble"
 *               numHuespedes:
 *                 type: integer
 *                 example: 2
 *               estado:
 *                 type: string
 *                 example: "confirmada"
 *     responses:
 *       201:
 *         description: Reserva creada con éxito
 *       400:
 *         description: Error en la solicitud
 */
router.post('/', crearReserva);

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Obtiene la lista de todas las reservas
 *     description: Devuelve todas las reservas registradas.
 *     responses:
 *       200:
 *         description: Lista de reservas obtenida con éxito
 */
router.get('/', obtenerReservas);

/**
 * @swagger
 * /api/reservas/{id}:
 *   get:
 *     summary: Obtiene los detalles de una reserva específica
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Detalles de la reserva
 *       404:
 *         description: Reserva no encontrada
 */
router.get('/:id', obtenerReservaEspecifica);

/**
 * @swagger
 * /api/reservas/{id}:
 *   put:
 *     summary: Actualiza una reserva existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hotel:
 *                 type: string
 *                 example: "Hotel Paraíso"
 *               fecha:
 *                 type: string
 *                 format: date
 *                 example: "2023-12-20"
 *               tipoHabitacion:
 *                 type: string
 *                 example: "doble"
 *               numHuespedes:
 *                 type: integer
 *                 example: 2
 *               estado:
 *                 type: string
 *                 example: "confirmada"
 *     responses:
 *       200:
 *         description: Reserva actualizada con éxito
 *       404:
 *         description: Reserva no encontrada
 */
router.put('/:id', actualizarReserva);

/**
 * @swagger
 * /api/reservas/{id}:
 *   delete:
 *     summary: Elimina una reserva existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Reserva eliminada con éxito
 *       404:
 *         description: Reserva no encontrada
 */
router.delete('/:id', eliminarReserva);

/**
 * @swagger
 * /api/reservas/filtrar/hotel:
 *   get:
 *     summary: Filtra reservas por hotel
 *     description: Obtiene todas las reservas para un hotel específico.
 *     parameters:
 *       - in: query
 *         name: hotel
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre del hotel para filtrar las reservas
 *     responses:
 *       200:
 *         description: Lista de reservas para el hotel especificado
 */
router.get('/filtrar/hotel', filtrarPorHotel);

/**
 * @swagger
 * /api/reservas/filtrar/fechas:
 *   get:
 *     summary: Filtra reservas por rango de fechas
 *     description: Obtiene todas las reservas dentro del rango de fechas especificado.
 *     parameters:
 *       - in: query
 *         name: fecha_inicio
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         description: Fecha de inicio del rango (formato YYYY-MM-DD)
 *       - in: query
 *         name: fecha_fin
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         description: Fecha de fin del rango (formato YYYY-MM-DD)
 *     responses:
 *       200:
 *         description: Lista de reservas en el rango de fechas especificado
 */
router.get('/filtrar/fechas', filtrarPorRangoFechas);

/**
 * @swagger
 * /api/reservas/filtrar/tipo-habitacion:
 *   get:
 *     summary: Filtra reservas por tipo de habitación
 *     description: Obtiene todas las reservas de un tipo de habitación específico.
 *     parameters:
 *       - in: query
 *         name: tipo_habitacion
 *         required: true
 *         schema:
 *           type: string
 *         description: Tipo de habitación para filtrar las reservas (por ejemplo, "suite", "doble")
 *     responses:
 *       200:
 *         description: Lista de reservas del tipo de habitación especificado
 */
router.get('/filtrar/tipo-habitacion', filtrarPorTipoHabitacion);

/**
 * @swagger
 * /api/reservas/filtrar/estado:
 *   get:
 *     summary: Filtra reservas por estado
 *     description: Obtiene todas las reservas con un estado específico.
 *     parameters:
 *       - in: query
 *         name: estado
 *         required: true
 *         schema:
 *           type: string
 *         description: Estado de la reserva (por ejemplo, "pendiente", "confirmada")
 *     responses:
 *       200:
 *         description: Lista de reservas en el estado especificado
 */
router.get('/filtrar/estado', filtrarPorEstado);

/**
 * @swagger
 * /api/reservas/filtrar/numero-huespedes:
 *   get:
 *     summary: Filtra reservas por número de huéspedes
 *     description: Obtiene todas las reservas con el número de huéspedes especificado.
 *     parameters:
 *       - in: query
 *         name: num_huespedes
 *         required: true
 *         schema:
 *           type: integer
 *         description: Número de huéspedes para filtrar las reservas
 *     responses:
 *       200:
 *         description: Lista de reservas con el número de huéspedes especificado
 */
router.get('/filtrar/numero-huespedes', filtrarPorNumeroHuespedes);

// Exportación del módulo router
module.exports = router;