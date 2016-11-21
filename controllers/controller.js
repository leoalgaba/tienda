'use strict'


const Modelo = require('../models/modelo');

// *** LISTADO GENERAL ***
function getProductos(req,res) {
	Modelo.find({}, (err,productos) =>{
		if(err) return res.status(500).send({message:`Error al realizar la peticion: ${err}`})
		if (!productos) return res.status(404).send({message: 'No existen os'})

		res.status(200).send({productos})
	})
}
// *** AÑADIR UN PRODUCTO ***
function saveProducto(req,res) {
	console.log('POST /api/producto');
	console.log(req.body);

	let modelo = new Modelo()
	modelo.nombre = req.body.nombre
	modelo.foto = req.body.foto
	modelo.precio = req.body.precio
	modelo.categoria = req.body.categoria
	modelo.descripcion = req.body.descripcion

	modelo.save((err, salvado) =>{
		if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})
		res.status(200).send({modelo:salvado})
	})
}

// *** LISTAR UN PRODUCTO POR SU ID ***
function getProducto(req,res) {
	let productoId = req.params.productoId
	Modelo.findById(productoId, (err, producto) =>{
		if(err) return res.status(500).send({message:`Error al realizar la peticion: ${err}`})
		if (!producto) return res.status(404).send({message: 'El producto no existe'})

		res.status(200).send({ producto })
	})
}

// *** MODIFICAR UN PRODUCTO POR SU ID ***
function updateProducto(req,res) {
	let productoId = req.params.productoId
	let update = req.body

	Modelo.findByIdAndUpdate(productoId, update, (err, modificado) => {
		if (err) res.status(500).send({message: `Error al borrar en la base de datos: ${err}`})

		res.status(200).send({ modificado})
	})
}

// *** BORRAR UN PRODUCTO POR SU ID ***
function deleteProducto(req,res) {
	let productoId = req.params.productoId

	Modelo.findById(productoId, (err, producto) => {
		if (err) res.status(500).send({message: `Error al borrar en la base de datos: ${err}`})

		producto.remove(err => {
			if (err) res.status(500).send({message: `Error al borrar en la base de datos: ${err}`})
			res.status(200).send({message: 'El producto ha sido eliminado'})
		})
	})
}

// EXPORTAMOS TODAS LAS FUNCIONES
module.exports = {
	getProductos,
	saveProducto,
	getProducto,
	updateProducto,
	deleteProducto
}