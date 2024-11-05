// Array para almacenar las reservas
let reservas = [];

// Función para crear una nueva reserva
const crearReserva = (req, res) => {
    const { hotel, fecha, tipoHabitacion, numHuespedes } = req.body; // Extraemos datos de la solicitud
    const nuevaReserva = {
        id: reservas.length + 1, // Asignamos un ID a la nueva reserva
        hotel,
        fecha,
        tipoHabitacion,
        numHuespedes,
    };
    reservas.push(nuevaReserva); // Agregamos la nueva reserva al array
    res.status(201).json(nuevaReserva); // Enviamos la reserva creada como respuesta
};

// Función para obtener todas las reservas
const obtenerReservas = (req, res) => {
    res.json(reservas); // Responder con todas las reservas en formato JSON
};

// Función para actualizar una reserva existente
const actualizarReserva = (req, res) => {
    const { id } = req.params; // Obtenemos el ID de los parámetros de la URL
    const { hotel, fecha, tipoHabitacion, numHuespedes } = req.body; // Extraemos los datos de la solicitud

    // Buscamos la reserva por su ID
    const reserva = reservas.find(r => r.id === parseInt(id));

    if (!reserva) {
        return res.status(404).json({ mensaje: 'Reserva no encontrada' }); // Si no se encuentra, devolvemos un error
    }

    // Actualizamos los datos de la reserva si existe
    if (hotel) reserva.hotel = hotel;
    if (fecha) reserva.fecha = fecha;
    if (tipoHabitacion) reserva.tipoHabitacion = tipoHabitacion;
    if (numHuespedes) reserva.numHuespedes = numHuespedes;

    res.json(reserva); // Enviamos la reserva actualizada como respuesta
};

// Función para eliminar una reserva
const eliminarReserva = (req, res) => {
    const { id } = req.params; // Obtenemos el ID de los parámetros de la URL
    const index = reservas.findIndex(r => r.id === parseInt(id)); // Encontramos el índice de la reserva

    if (index === -1) {
        return res.status(404).json({ mensaje: 'Reserva no encontrada' }); // Si no se encuentra, devolvemos un error
    }

    // Eliminamos la reserva de la lista
    const reservaEliminada = reservas.splice(index, 1);
    res.json({ mensaje: 'Reserva eliminada con éxito', reserva: reservaEliminada });
};

// Función para filtrar reservas por nombre de hotel
const filtrarPorHotel = (req, res) => {
    const { hotel } = req.query; // Extraemos el hotel del parámetro de la URL
    const resultado = reservas.filter(r => r.hotel === hotel); // Filtramos por hotel
    res.json(resultado); // Devolvemos el resultado
};

// Función para filtrar reservas por rango de fechas
const filtrarPorRangoFechas = (req, res) => {
    const { fecha_inicio, fecha_fin } = req.query; // Obtenemos las fechas de inicio y fin
    const resultado = reservas.filter(r => r.fecha >= fecha_inicio && r.fecha <= fecha_fin); // Filtramos por rango de fechas
    res.json(resultado); // Enviamos la respuesta
};

// Función para filtrar reservas por tipo de habitación
const filtrarPorTipoHabitacion = (req, res) => {
    const { tipo_habitacion } = req.query; // Obtenemos el tipo de habitación del parámetro de la URL
    const resultado = reservas.filter(r => r.tipoHabitacion === tipo_habitacion); // Filtramos por tipo de habitación
    res.json(resultado); // Devolvemos el resultado
};

// Función para filtrar reservas por estado de la reserva
const filtrarPorEstado = (req, res) => {
    const { estado } = req.query; // Extraemos el estado del parámetro de la URL
    const resultado = reservas.filter(r => r.estado === estado); // Filtramos por estado
    res.json(resultado); // Enviamos la respuesta
};

// Función para filtrar reservas por número de huéspedes
const filtrarPorNumeroHuespedes = (req, res) => {
    const { num_huespedes } = req.query; // Extraemos el número de huéspedes del parámetro de la URL
    const resultado = reservas.filter(r => r.numHuespedes === parseInt(num_huespedes)); // Filtramos por número de huéspedes
    res.json(resultado); // Enviamos la respuesta
};

// Función para obtener los detalles de una reserva específica
const obtenerReservaEspecifica = (req, res) => {
    const { id } = req.params; // Obtenemos el ID de los parámetros de la URL
    const reserva = reservas.find(r => r.id === parseInt(id)); // Buscamos la reserva por ID
    
    if (!reserva) {
        return res.status(404).json({ mensaje: 'Reserva no encontrada' }); // Si no se encuentra, devolvemos un error
    }

    res.json(reserva); // Enviamos la reserva encontrada como respuesta
};

// Exportación de funciones para su uso en otros módulos
module.exports = {
    crearReserva,
    obtenerReservas,
    actualizarReserva,
    eliminarReserva,
    filtrarPorHotel,
    filtrarPorRangoFechas,
    filtrarPorTipoHabitacion,
    filtrarPorEstado,
    filtrarPorNumeroHuespedes,
    obtenerReservaEspecifica
};