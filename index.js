const express = require('express');

// Crear el Servidor de express
const app = express();

// Rutas
app.get('/', (req,res) =>{
    res.json({
        of:true
    })
})

//Escuchar peticiones
app.listen( 4000, () =>{
    console.log(`Servidor corriendo en puerto ${4000}`)
} )