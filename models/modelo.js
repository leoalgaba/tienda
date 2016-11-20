'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ProductoSchema = Schema({
	nombre: String,
	foto: String,
	precio: {type: Number, default:0},
	categoria: {type: String, enum:['ordenadores', 'moviles', 'accesorios']},
	descripcion: String
})

module.exports = mongoose.model('Modelo', ProductoSchema)


