/* 
    Event Routes
    api/events
*/

const Router = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento} = require('../controllers/events');

const router = Router();

// ValidarJWT en todas las rutas
router.use( validarJWT );

// Obtener eventos
router.get('/', getEventos)

// Crear un nuevo evento
router.post('/', crearEvento)

// Actualizar evento
router.put('/:id', actualizarEvento );

// Eliminar evento
router.delete('/:id', eliminarEvento)

module.exports = router;