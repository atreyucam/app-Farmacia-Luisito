const {
  Producto,
  Proveedor,
  Detalle_CompraProveedor,
} = require("../models/modelDataBase");

const { Configuracion } = require("../models/tablaConfiguracion");

class ProductosRepository {
  async create(productoData) {
    return await Producto.create(productoData);
  }

  async getAll() {
    return await Producto.findAll({
      include: [Proveedor],
    });
  }

  async getById(id) {
    return await Producto.findByPk(id, {
      include: [Proveedor],
    });
  }

  async update(id, productoData) {
    return await Producto.update(productoData, {
      where: { id_producto: id },
    });
  }

  async delete(id) {
    return await Producto.destroy({
      where: { id_producto: id },
    });
  }
  async createProductoEnRevision(datosProducto) {
    return await Producto.create({ ...datosProducto, enRevision: true });
  }

  async actualizarEstadoProducto(id, enRevision) {
    return await Producto.update(
      { enRevision },
      { where: { id_producto: id } }
    );
  }

  // validaciones

  // Metodo para obtener el precio de venta
  async getPrecioVenta(id_producto) {
    // Obtener el último precio de compra
    const precioCompra = await Detalle_CompraProveedor.findOne({
      where: { id_producto },
      order: [["createdAt", "DESC"]], // Asegúrate de tener un campo 'createdAt' o similar
    });

    if (!precioCompra) {
      throw new Error("Producto no encontrado o sin precio de compra.");
    }
    // Obtener el margen de ganancia
    const margenConfig = await Configuracion.findOne({
      where: { clave: "MargenGanancia" },
    });
    const margen = margenConfig ? parseFloat(margenConfig.valor) : 30; // Valor por defecto si no se encuentra

    // Calcular el precio de venta
    const precioVenta = precioCompra.precioUnidad * (1 + margen / 100);
    return precioVenta;
  }
}

module.exports = new ProductosRepository();
