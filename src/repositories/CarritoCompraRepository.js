// CarritoCompraRepository.js
const { Carrito_compra } = require('../models/modeloBaseDatos.js');

class CarritoCompraRepository {
    async create(datosCarrito) {
        return await Carrito_compra.create(datosCarrito);
    }

    async getAll() {
        return await Carrito_compra.findAll();
    }

    async getById(id) {
        return await Carrito_compra.findByPk(id);
    }

    async update(id, datosCarrito) {
        return await Carrito_compra.update(datosCarrito, { where: { id_carrito: id } });
    }

    async delete(id) {
        return await Carrito_compra.destroy({ where: { id_carrito: id } });
    }
}

module.exports = new CarritoCompraRepository();