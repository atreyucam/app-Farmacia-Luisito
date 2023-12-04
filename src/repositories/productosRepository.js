const { Producto, Proveedor } = require('../models/modeloBaseDatos.js');

class ProductosRepository {
    async create(productoData) {
        return await Producto.create(productoData);
    }

    async getAll() {
        return await Producto.findAll({
            include: [Proveedor]
        });
    }

    async getById(id) {
        return await Producto.findByPk(id, {
            include: [Proveedor]
        });
    }

    async update(id, productoData) {
        return await Producto.update(productoData, {
            where: { id_producto: id }
        });
    }

    async delete(id) {
        return await Producto.destroy({
            where: { id_producto: id }
        });
    }
    async createProductoEnRevision(datosProducto) {
        return await Producto.create({ ...datosProducto, enRevision: true });
    }

    async actualizarEstadoProducto(id, enRevision) {
        return await Producto.update({ enRevision }, { where: { id_producto: id } });
    }
}

module.exports = new ProductosRepository();
