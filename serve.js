'use strict'
// *** LOS REQUERIMIENTOS ***
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// *** INSTANCIAMOS EXPRESS ***
const app = express()

// *** REQUERIMOS LAS RUTAS (GET, POST, PUT Y DELETE)
const api = require('./routes/route');

// *** MIDWARE ***
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use (api) // *** USAMOS LAS RUTAS

// *** CONEXION A  LA BASE DE DATOS Y AL SERVIDOR
mongoose.connect('mongodb://localhost/tienda', (err, res) =>{
	if (err) {
		return console.log(`Error al conectar a la base de datos: ${err}`)
	}
	console.log('Conexion a la base de datos establecida')

	app.listen(3000, () => {
	console.log(`API REST corriendo en http://localhost: 3000`)
})
})

