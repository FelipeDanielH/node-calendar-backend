const { Router } = require('express');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

const router = Router();

router.post('/new' , crearUsuario );
router.post('/' , loginUsuario );
router.post('/renew' , revalidarToken );

module.exports = router;