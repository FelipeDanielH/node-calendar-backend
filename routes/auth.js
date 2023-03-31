const { Router } = require('express');
const { check } = require('express-validator')
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

const router = Router();

router.post(
    '/new',
    [//Middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe tener 6 caracteres minimo').isLength({min: 6}),
    ],
    crearUsuario
);

router.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe tener 6 caracteres minimo').isLength({min: 6}),
    ],
    loginUsuario
);
router.get('/renew', revalidarToken);

module.exports = router;