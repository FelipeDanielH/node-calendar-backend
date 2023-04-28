const { response } = require('express')

const getEventos = (req, res = response) => {
    res.json( {
        ok: true,
        msg: 'obtener eventos'
    });
}

const crearEvento = (req, res = response) => {

    // verificar que tenga el evento.
    console.log( req.body );

    res.json( {
        ok: true,
        msg: 'crear evento'
    });
}

const actualizarEvento = (req, res = response) => {
    res.json( {
        ok: true,
        msg: 'actualizar evento'
    });
}

const eliminarEvento = (req, res = response) => {
    res.json( {
        ok: true,
        msg: 'eliminar evento'
    });
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}