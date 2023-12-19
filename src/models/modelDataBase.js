const { DataTypes } = require("sequelize");
const { sequelize } = require("../connections/connectionDataBase");

// Tabla Usuarios
const Usuario = sequelize.define(
  "Usuario",
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cedula: { type: DataTypes.INTEGER, allowNull: false },
    nombre: { type: DataTypes.STRING(40), allowNull: false },
    roleUser: { type: DataTypes.STRING(25), allowNull: false },
    telefono: { type: DataTypes.INTEGER, allowNull: false },
    emailUser: { type: DataTypes.STRING(40), allowNull: false },
    userName: { type: DataTypes.STRING(25), allowNull: false },
    passwordUser: { type: DataTypes.STRING(25), allowNull: false },
    direccionUser: { type: DataTypes.STRING(50), allowNull: false },
  },
  { tableName: "usuarios" }
);

// Tabla Proveedores
const Proveedor = sequelize.define(
  "Proveedor",
  {
    id_proveedor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ruc: { type: DataTypes.INTEGER, allowNull: false },
    nombreProveedor: { type: DataTypes.STRING(40), allowNull: false },
    direccionProveedor: { type: DataTypes.STRING(50), allowNull: false },
    telefonoProveedor: { type: DataTypes.INTEGER, allowNull: false },
    emailProveedor: { type: DataTypes.STRING(40), allowNull: false },
  },
  { tableName: "proveedores" }
);

// Tabla Productos
const Producto = sequelize.define(
  "Producto",
  {
    id_producto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombreProducto: { type: DataTypes.STRING(30), allowNull: false },
    descripcion: { type: DataTypes.STRING(100), allowNull: false },
    categoria: { type: DataTypes.STRING(30), allowNull: false },
    fechaCaducidad: { type: DataTypes.DATE, allowNull: true },
    reqReceta: { type: DataTypes.BOOLEAN, allowNull: false },
    cantidad: { type: DataTypes.SMALLINT, allowNull: false },
    fechaActualizacion: { type: DataTypes.DATE, allowNull: true },
    enRevision: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  { tableName: "productos" }
);
Proveedor.hasMany(Producto, {
  as: "ProveedorProductos",
  foreignKey: "id_proveedor",
});
Producto.belongsTo(Proveedor, { foreignKey: "id_proveedor" });

// Tabla Alertas
const Alerta = sequelize.define(
  "Alerta",
  {
    id_alerta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipoAlerta: { type: DataTypes.STRING(25), allowNull: false },
    mensajeAlerta: { type: DataTypes.STRING(100), allowNull: false },
    fechaAlerta: { type: DataTypes.DATE, allowNull: false },
  },
  { tableName: "alertas" }
);
Producto.hasMany(Alerta, { as: "AlertasProducto", foreignKey: "id_producto" });
Alerta.belongsTo(Producto, { foreignKey: "id_producto" });

// Tabla Compra_Proveedores
const Compra_Proveedor = sequelize.define(
  "Compra_Proveedor",
  {
    id_CompraProveedor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    numeroCompra: { type: DataTypes.INTEGER, allowNull: false },
    fechaCompra: { type: DataTypes.DATE, allowNull: true },
    subTotalCompra: { type: DataTypes.DECIMAL, allowNull: false },
    descuentoCompra: { type: DataTypes.DECIMAL, allowNull: true },
    IVA_compra: { type: DataTypes.DECIMAL, allowNull: false },
    totalCompra: { type: DataTypes.DECIMAL, allowNull: false },
  },
  { tableName: "compraProveedores" }
);
Proveedor.hasMany(Compra_Proveedor, {
  as: "ProveedorCompras",
  foreignKey: "id_proveedor",
});
Compra_Proveedor.belongsTo(Proveedor, { foreignKey: "id_proveedor" });

//Tabla Detalle_Compra_Proveedores
const Detalle_CompraProveedor = sequelize.define(
  "Detalle_CompraProveedor",
  {
    id_compraDetalle: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cantidad: { type: DataTypes.INTEGER, allowNull: false },
    precioUnidad: { type: DataTypes.DECIMAL, allowNull: false },
  },
  { tableName: "detalle_CompraProveedores" }
);
Compra_Proveedor.hasMany(Detalle_CompraProveedor, {
  as: "DetalleCompraProveedores",
  foreignKey: "id_compraProveedor",
});
Detalle_CompraProveedor.belongsTo(Compra_Proveedor, {
  foreignKey: "id_compraProveedor",
});
Producto.hasMany(Detalle_CompraProveedor, {
  as: "DetalleCompraProducto",
  foreignKey: "id_producto",
});
Detalle_CompraProveedor.belongsTo(Producto, { foreignKey: "id_producto" });

// // tabla Carrito_compras
const Carrito_compra = sequelize.define(
  "Carrito_compra",
  {
    id_carrito: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fechaCarrito: { type: DataTypes.DATE, allowNull: true },
    estadoCarrito: { type: DataTypes.BOOLEAN, allowNull: true },
    totalVentaCarrito: { type: DataTypes.DECIMAL, allowNull: false },
  },
  { tableName: "carritoCompras" }
);
Usuario.hasOne(Carrito_compra, {
  as: "CarritoUsuario",
  foreignKey: "id_usuario",
});
Carrito_compra.belongsTo(Usuario, { foreignKey: "id_usuario" });

// // Tabla detalle_carrito
const Detalle_Carrito = sequelize.define(
  "Detalle_Carrito",
  {
    id_detalleCarrito: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cantidad: { type: DataTypes.INTEGER, allowNull: false },
    precioPorUnidad: { type: DataTypes.DECIMAL, allowNull: false },
  },
  { tableName: "detalleCarritos" }
);
Carrito_compra.hasMany(Detalle_Carrito, {
  as: "DetalleCarrito",
  foreignKey: "id_carrito",
});
Detalle_Carrito.belongsTo(Carrito_compra, { foreignKey: "id_carrito" });
Producto.hasMany(Detalle_Carrito, {
  as: "DetalleCarritoProductos",
  foreignKey: "id_producto",
});
Detalle_Carrito.belongsTo(Producto, { foreignKey: "id_producto" });

// Tabla ventas
const Venta = sequelize.define(
  "Venta",
  {
    id_venta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    numeroVenta: { type: DataTypes.INTEGER, allowNull: false },
    fechaVenta: { type: DataTypes.DATE, allowNull: true },
    subTotalVenta: { type: DataTypes.DECIMAL, allowNull: false },
    descuentoVenta: { type: DataTypes.DECIMAL, allowNull: true },
    IVA_venta: { type: DataTypes.DECIMAL, allowNull: false },
    totalVenta: { type: DataTypes.DECIMAL, allowNull: false },
    id_carrito: { type: DataTypes.INTEGER, allowNull: true },
  },
  { tableName: "ventas" }
);
Usuario.hasMany(Venta, { as: "VentaUsuario", foreignKey: "id_usuario" });
Venta.belongsTo(Usuario, { foreignKey: "id_usuario" });
Carrito_compra.hasOne(Venta, { foreignKey: "id_carrito" });
Venta.belongsTo(Carrito_compra, { foreignKey: "id_carrito" });

// // Tabla detalle_venta
const Detalle_venta = sequelize.define(
  "Detalle_venta",
  {
    id_detalleVenta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cantidadVentaProducto: { type: DataTypes.INTEGER, allowNull: false },
  },
  { tableName: "detalleVentas" }
);
Venta.hasMany(Detalle_venta, { as: "DetalleVentas", foreignKey: "id_venta" });
Detalle_venta.belongsTo(Venta, { foreignKey: "id_venta" });
Producto.hasMany(Detalle_venta, {
  as: "DetalleVenta_Producto",
  foreignKey: "id_producto",
});
Detalle_venta.belongsTo(Producto, { foreignKey: "id_producto" });

module.exports = {
  Usuario,
  Proveedor,
  Producto,
  Alerta,
  Compra_Proveedor,
  Detalle_CompraProveedor,
  Carrito_compra,
  Detalle_Carrito,
  Venta,
  Detalle_venta,
};
