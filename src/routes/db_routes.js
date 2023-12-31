const express = require("express");
const UsuarioController = require("../controllers/UsuariosController");
const ProveedorController = require("../controllers/ProveedoresController");
const ProductoController = require("../controllers/ProductosController");
const AlertaController = require("../controllers/AlertasController");
const CompraProveedorController = require("../controllers/CompraProveedoresController");
const DetalleCompraProveedorController = require("../controllers/DetalleCompraProveedoresController");
const VentaController = require("../controllers/VentaController");
const DetalleVentaController = require("../controllers/DetalleVentaController");
const CarritoCompraController = require("../controllers/CarritoCompraController");
const DetalleCarritoCompraController = require("../controllers/DetalleCarritoCompraController");
const ConfiguracionController = require("../controllers/ConfiguracionController");
const {verificarToken, autorizarRol} = require('../middleware/authMiddleware');

const router = express.Router();

// aplica middleware a rutas protegidas
router.get('/rutasProtegida', verificarToken, UsuarioController.getAll);


// rutas para autenticacion (Publicas)
router.post("/registrerUser", UsuarioController.register);
router.post("/loginUser", UsuarioController.login);

// Rutas de Usuarios
// Admin: Gestión completa de usuarios
router.get("/usuarios", verificarToken, autorizarRol('administrador'), UsuarioController.getAll);
router.delete("/usuarios/:id", verificarToken, autorizarRol('administrador'), UsuarioController.delete);
// Empleado y Cliente: Acceso a su propia información y actualización
router.get("/usuarios/:id", verificarToken, autorizarRol('administrador', 'empleado', 'cliente'),  UsuarioController.getById);
router.put("/usuarios/:id", verificarToken, autorizarRol('administrador', 'empleado', 'cliente'), UsuarioController.update);

router.get('/usuarioPerfil', verificarToken, autorizarRol('administrador', 'empleado', 'cliente'),UsuarioController.getPerfil);


// Rutas de Proveedores
// Admin: CRUD completo; Empleado: Solo listado y detalle
router.post("/proveedores", verificarToken, autorizarRol('administrador'), ProveedorController.create);
router.get("/proveedores", verificarToken, autorizarRol('administrador', 'empleado'), ProveedorController.getAll);
router.get("/proveedores/:id", verificarToken, autorizarRol('administrador', 'empleado'), ProveedorController.getById);
router.put("/proveedores/:id", verificarToken, autorizarRol('administrador'), ProveedorController.update);
router.delete("/proveedores/:id", verificarToken, autorizarRol('administrador'), ProveedorController.delete);

// Rutas de Productos
// Admin y Empleado: CRUD completo; Cliente: Solo listado y detalle
router.post("/productos", verificarToken, autorizarRol('administrador', 'empleado'), ProductoController.create);
router.get("/productos", ProductoController.getAll);
router.get("/productos/:id", ProductoController.getById);
router.put("/productos/:id", verificarToken, autorizarRol('administrador', 'empleado'), ProductoController.update);
router.delete("/productos/:id", verificarToken, autorizarRol('administrador', 'empleado'), ProductoController.delete);


// Ruta a la tabla Alertas
router.post("/alertas", AlertaController.create);
router.get("/alertas", AlertaController.getAll);
router.get("/alertas/:id", AlertaController.getById);
router.put("/alertas/:id", AlertaController.update);
router.delete("/alertas/:id", AlertaController.delete);

// Ruta a la tabla Compra Proveedores
router.post("/compraProveedores", CompraProveedorController.create);
router.get("/compraProveedores", CompraProveedorController.getAll);
router.get("/compraProveedores/:id", CompraProveedorController.getById);
router.put("/compraProveedores/:id", CompraProveedorController.update);
router.delete("/compraProveedores/:id", CompraProveedorController.delete);

// Ruta a la tabla Detalle Compra Proveedores
router.post(
  "/detallecompraProveedores",
  DetalleCompraProveedorController.create
);
router.get(
  "/detallecompraProveedores",
  DetalleCompraProveedorController.getAll
);
router.get(
  "/detallecompraProveedores/:id",
  DetalleCompraProveedorController.getById
);
router.put(
  "/detallecompraProveedores/:id",
  DetalleCompraProveedorController.update
);
router.delete(
  "/detallecompraProveedores/:id",
  DetalleCompraProveedorController.delete
);

// Rutas de Venta
// Admin y Empleado: CRUD completo; Cliente: Crear y ver sus propias ventas
router.post("/ventas", verificarToken, autorizarRol('administrador', 'empleado', 'cliente'), VentaController.create);
router.get("/ventas", verificarToken, autorizarRol('administrador', 'empleado'), VentaController.getAll);
router.get("/ventas/:id", verificarToken, autorizarRol('administrador', 'empleado', 'cliente'), VentaController.getById);
router.put("/ventas/:id", verificarToken, autorizarRol('administrador', 'empleado'), VentaController.update);
router.delete("/ventas/:id", verificarToken, autorizarRol('administrador', 'empleado'), VentaController.delete);

// Ruta a la tabla detalle venta
router.post("/detalleVentas", DetalleVentaController.create);
router.get("/detalleVentas", DetalleVentaController.getAll);
router.get("/detalleVentas/:id", DetalleVentaController.getById);
router.put("/ventdetalleVentasas/:id", DetalleVentaController.update);
router.delete("/detalleVentas/:id", DetalleVentaController.delete);

// Ruta a la tabla carrito compra
router.post("/carritoCompras", CarritoCompraController.create);
router.get("/carritoCompras", CarritoCompraController.getAll);
router.get("/carritoCompras/:id", CarritoCompraController.getById);
router.put("/carritoCompras/:id", CarritoCompraController.update);
router.delete("/carritoCompras/:id", CarritoCompraController.delete);

// Ruta a la tabla detalle carrito compra
router.post("/detalleCarritoCompras", DetalleCarritoCompraController.create);
router.get("/detalleCarritoCompras", DetalleCarritoCompraController.getAll);
router.get(
  "/detalleCarritoCompras/:id",
  DetalleCarritoCompraController.getById
);
router.put("/detalleCarritoCompras/:id", DetalleCarritoCompraController.update);
router.delete(
  "/detalleCarritoCompras/:id",
  DetalleCarritoCompraController.delete
);

// Rutas de Configuraciones (Solo Admin)
router.post("/configuraciones", verificarToken, autorizarRol('administrador'), ConfiguracionController.setConfig);
router.get("/configuraciones/", verificarToken, autorizarRol('administrador'), ConfiguracionController.getConfig);
router.get("/configuraciones/:id", verificarToken, autorizarRol('administrador'), ConfiguracionController.getConfigById);
router.put("/configuraciones/:id", verificarToken, autorizarRol('administrador'), ConfiguracionController.update);
router.delete("/configuraciones/:id", verificarToken, autorizarRol('administrador'), ConfiguracionController.delete);


router.get("/productos/:id/precioVenta", ProductoController.getPrecioVenta);

module.exports = router;


// // Public
// router.post("/usuarios", UsuarioController.create);
