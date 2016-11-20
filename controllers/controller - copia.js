'use strict'


const Product = require('../models/product');

// *** UN PRODUCTO POR SU ID ***
function getProducto(req,res) {
	let productoId = req.params.productoId

	Product.findById(productoId, (err, producto) =>{
		if(err) return res.status(500).send({message:`Error al realizar la peticion: ${err}`})
		if (!producto) return res.status(404).send({message: 'El producto no existe'})

		res.status(200).send({ producto })
	})
}

// *** LISTADO GENERAL ***
function getProductos(req,res) {
	Product.find({}, (err,productos) =>{
		if(err) return res.status(500).send({message:`Error al realizar la peticion: ${err}`})
		if (!productos) return res.status(404).send({message: 'No existen productos'})

		res.status(200).send({producto:productos})
	})
}

// *** AÑADIMOS UN DOCUMENTO ***
function saveProducto(req,res) {
	console.log('POST /producto');
	console.log(req.body);

	let producto = new Product()
	producto.name = req.body.name
	producto.picture = req.body.picture
	producto.price = req.body.price
	producto.category = req.body.category
	producto.description = req.body.description

	producto.save((err, productoGuardado) =>{
		if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})
		res.status(200).send({producto: productoGuardado})
	})
}

// *** ACTUALIZAMOS UN DOCUMENTO ***
function updateProducto(req,res) {
	let productoId = req.params.productoId
	let actulizar = req.body

	Product.findByIdAndUpdate(productoId, actulizar, (err, productoActualizado) => {
		if (err) res.status(500).send({message: `Error al actulizar en la base de datos: ${err}`})

		res.status(200).send({ producto: productoActualizado})
	})
}

// *** BORRAMOS UN DOCUMENTO ***
function deleteProducto(req,res) {
	let productoId = req.params.productoId

	Product.findById(productoId, (err, producto) => {
		if (err) res.status(500).send({message: `Error al borrar en la base de datos: ${err}`})

		producto.remove(err => {
			if (err) res.status(500).send({message: `Error al borrar en la base de datos: ${err}`})
			res.status(200).send({message: 'El producto ha sido eliminado'})
		})
	})
}

// EXPORTAMOS TODAS LAS FUNCIONES
module.exports = {
	getProducto,
	getProductos,
	saveProducto,
	updateProducto,
	deleteProducto
}