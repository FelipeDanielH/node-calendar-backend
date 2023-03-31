const express = require('express');
require('dotenv').config();

// Crear el Servidor de express
const app = express();

// Directorio Publico
app.use( express.static('./public'));

// Rutas
app.use('/api/auth', require('./routes/auth') );
// TODO
//  auth - crear, login, renew
//  CRUD - eventos

//Escuchar peticiones
app.listen( process.env.PORT, () =>{
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)
} )