const express = require('express');
const UsuarioController = require('../controllers/UsuariosController');
const ProveedorController = require('../controllers/ProveedoresController');
const ProductoController = require('../controllers/ProductosController');
const AlertaController = require('../controllers/AlertasController');
const CompraProveedorController = require('../controllers/CompraProveedoresController');
const DetalleCompraProveedorController = require('../controllers/DetalleCompraProveedoresController');
const router = express.Router();

// Ruta a la tabla Usuarios
router.post('/usuarios', UsuarioController.create);
router.get('/usuarios', UsuarioController.getAll);
router.get('/usuarios/:id', UsuarioController.getById);
router.put('/usuarios/:id', UsuarioController.update);
router.delete('/usuarios/:id', UsuarioController.delete);

// Ruta a la tabla proveedores
router.post('/proveedores', ProveedorController.create);
router.get('/proveedores', ProveedorController.getAll);
router.get('/proveedores/:id', ProveedorController.getById);
router.put('/proveedores/:id', ProveedorController.update);
router.delete('/proveedores/:id', ProveedorController.delete);

// Ruta a la tabla productos
router.post('/productos', ProductoController.create);
router.get('/productos', ProductoController.getAll);
router.get('/productos/:id', ProductoController.getById);
router.put('/productos/:id', ProductoController.update);
router.delete('/productos/:id', ProductoController.delete);

// Ruta a la tabla Alertas
router.post('/alertas', AlertaController.create);
router.get('/alertas', AlertaController.getAll);
router.get('/alertas/:id', AlertaController.getById);
router.put('/alertas/:id', AlertaController.update);
router.delete('/alertas/:id', AlertaController.delete);

// Ruta a la tabla Compra Proveedores
router.post('/compraProveedores', CompraProveedorController.create);
router.get('/compraProveedores', CompraProveedorController.getAll);
router.get('/compraProveedores/:id', CompraProveedorController.getById);
router.put('/compraProveedores/:id', CompraProveedorController.update);
router.delete('/compraProveedores/:id', CompraProveedorController.delete);

// Ruta a la tabla Detalle Compra Proveedores
router.post('/detallecompraProveedores', DetalleCompraProveedorController.create);
router.get('/detallecompraProveedores', DetalleCompraProveedorController.getAll);
router.get('/detallecompraProveedores/:id', DetalleCompraProveedorController.getById);
router.put('/detallecompraProveedores/:id', DetalleCompraProveedorController.update);
router.delete('/detallecompraProveedores/:id', DetalleCompraProveedorController.delete);





module.exports = router;