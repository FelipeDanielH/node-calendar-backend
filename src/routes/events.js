/* 
    Event Routes
    api/events
*/
const Router = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento} = require('../controllers/events');
const { isDate } = require('../helpers/isDate');

const router = Router();

// ValidarJWT en todas las rutas
router.use( validarJWT );

// Obtener eventos
router.get('/', getEventos);

// Crear un nuevo evento
router.post('/', [ //Middlewares
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha de fin es obligatoria').custom(isDate),
    validarCampos
],
crearEvento
);

// Actualizar evento
router.put('/:id', actualizarEvento );

// Eliminar evento
router.delete('/:id', eliminarEvento);

module.exports = router;