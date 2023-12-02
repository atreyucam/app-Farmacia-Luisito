const { Alerta, Producto } = require('../models/modelDataBase');

class AlertasRepository {
    async create(productoData) {
        return await Alerta.create(productoData);
    }

    async getAll() {
        return await Alerta.findAll({
            include: [Producto]
        });
    }

    async getById(id) {
        return await Alerta.findByPk(id, {
            include: [Producto]
        });
    }

    async update(id, alertaData) {
        return await Alerta.update(alertaData, {
            where: { id_alerta: id }
        });
    }

    async delete(id) {
        return await Alerta.destroy({
            where: { id_alerta: id }
        });
    }
}

module.exports = new AlertasRepository();
