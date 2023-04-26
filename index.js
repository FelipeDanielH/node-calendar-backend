const express = require('express');
const { dbConnection } = require('./src/database/config');
require('dotenv').config();

// Crear el Servidor de express
const app = express();

// Base de datos
dbConnection();

// Directorio Publico
app.use( express.static('./public'));

// Lectura y parseo del body
app.use( express.json() );


// Rutas
app.use('/api/auth', require('./src/routes/auth') );

// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)
});