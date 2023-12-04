const{Detalle_venta} = require('../models/modeloBaseDatos.js');

class DetalleVentaRepository {
    async create(datosDetalleVenta) {
        return await Detalle_venta.create(datosDetalleVenta);
    }

    async getAll() {
        return await Detalle_venta.findAll();
    }

    async getById(id) {
        return await Detalle_venta.findByPk(id);
    }

    async update(id, datosDetalleVenta) {
        return await Detalle_venta.update(datosDetalleVenta, { where: { id_detalleVenta: id } });
    }

    async delete(id) {
        return await Detalle_venta.destroy({ where: { id_detalleVenta: id } });
    }
}

module.exports = new DetalleVentaRepository();