const{Venta} = require('../models/modeloBaseDatos.js');

class VentaRepository {
    async create(datosVenta) {
        return await Venta.create(datosVenta);
    }

    async getAll() {
        return await Venta.findAll();
    }

    async getById(id) {
        return await Venta.findByPk(id);
    }

    async update(id, datosVenta) {
        return await Venta.update(datosVenta, { where: { id_venta: id } });
    }

    async delete(id) {
        return await Venta.destroy({ where: { id_venta: id } });
    }
}

module.exports = new VentaRepository(); 
