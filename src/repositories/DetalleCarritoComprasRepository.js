// DetalleCarritoRepository.js
const { Detalle_Carrito } = require('../models/modeloBaseDatos.js');

class DetalleCarritoRepository {
    async create(datosDetalleCarrito) {
        return await Detalle_Carrito.create(datosDetalleCarrito);
    }

    async getAll() {
        return await Detalle_Carrito.findAll();
    }

    async getById(id) {
        return await Detalle_Carrito.findByPk(id);
    }

    async update(id, datosDetalleCarrito) {
        return await Detalle_Carrito.update(datosDetalleCarrito, { where: { id_detalleCarrito: id } });
    }

    async delete(id) {
        return await Detalle_Carrito.destroy({ where: { id_detalleCarrito: id } });
    }
}

module.exports = new DetalleCarritoRepository();