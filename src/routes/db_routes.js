//llamar a los controladores
const express = require('express');
const UsuarioController = require('../controllers/UsuariosController');
const ProveedorController = require('../controllers/ProveedoresController');
const ProductoController = require('../controllers/ProductosController');
const AlertaController = require('../controllers/AlertasController');
const CompraProveedorController = require('../controllers/CompraProveedoresController');
const DetalleCompraProveedorController = require('../controllers/DetalleCompraProveedoresController');
const VentaController = require('../controllers/VentaController');
const DetalleVentaController = require('../controllers/DetalleVentaController');
const CarritoCompraController = require('../controllers/CarritoCompraController');
const DetalleCarritoCompraController = require('../controllers/DetalleCarritoCompraController');
const router = express.Router();


// Ruta a la tabla Usuarios
router.post('/usuarios', UsuarioController.create);
router.get('/usuarios', UsuarioController.getAll);
router.get('/usuarios/:id', UsuarioController.getById);
router.put('/usuarios/:id', UsuarioController.update);
router.delete('/usuarios/:id', UsuarioController.delete);
router.post('/usuarios_prueba', UsuarioController.authenticate);

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

// Ruta a la tabla venta
router.post('/ventas', VentaController.create);
router.get('/ventas', VentaController.getAll);
router.get('/ventas/:id', VentaController.getById);
router.put('/ventas/:id', VentaController.update);
router.delete('/ventas/:id', VentaController.delete);

// Ruta a la tabla detalle venta
router.post('/detalleVentas', DetalleVentaController.create);
router.get('/detalleVentas', DetalleVentaController.getAll);
router.get('/detalleVentas/:id', DetalleVentaController.getById);
router.put('/ventdetalleVentasas/:id', DetalleVentaController.update);
router.delete('/detalleVentas/:id', DetalleVentaController.delete);

// Ruta a la tabla carrito compra
router.post('/carritoCompras', CarritoCompraController.create);
router.get('/carritoCompras', CarritoCompraController.getAll);
router.get('/carritoCompras/:id', CarritoCompraController.getById);
router.put('/carritoCompras/:id', CarritoCompraController.update);
router.delete('/carritoCompras/:id', CarritoCompraController.delete);

// Ruta a la tabla detalle carrito compra
router.post('/detalleCarritoCompras', DetalleCarritoCompraController.create);
router.get('/detalleCarritoCompras', DetalleCarritoCompraController.getAll);
router.get('/detalleCarritoCompras/:id', DetalleCarritoCompraController.getById);
router.put('/detalleCarritoCompras/:id', DetalleCarritoCompraController.update);
router.delete('/detalleCarritoCompras/:id', DetalleCarritoCompraController.delete);


module.exports = router;