const { Compra_Proveedor, Proveedor } = require('../models/modelDataBase');

class CompraProveedoresRepository {
    async create(productoData) {
        return await Compra_Proveedor.create(productoData);
    }

    async getAll() {
        return await Compra_Proveedor.findAll({
            include: [Proveedor]
        });
    }

    async getById(id) {
        return await Compra_Proveedor.findByPk(id, {
            include: [Proveedor]
        });
    }

    async update(id, compraProData) {
        return await Compra_Proveedor.update(compraProData, {
            where: { id_CompraProveedor: id }
        });
    }

    async delete(id) {
        return await Compra_Proveedor.destroy({
            where: { id_CompraProveedor: id }
        });
    }
}

module.exports = new CompraProveedoresRepository();
