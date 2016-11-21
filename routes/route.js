'use strict'

const express = require('express');

const tiendaCtrl = require('../controllers/controller')

// *** INSTANCIAMOS ROUTER DE EXPRESS ***
const api = express.Router()

// REST FULL METODO GET,POST,PUT,DELETE
api.get('/producto', tiendaCtrl.getProductos) // listado todo los productos
api.post('/producto', tiendaCtrl.saveProducto) // añadir un producto
api.get('/producto/:productoId', tiendaCtrl.getProducto) //listar un producto por su Id
api.put('/producto/:productoId', tiendaCtrl.updateProducto) // modificar producto por su Id
api.delete('/producto/:productoId', tiendaCtrl.deleteProducto) // borrar producto por su Id

module.exports = api


