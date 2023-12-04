const {Proveedor} = require('../models/modeloBaseDatos.js');

class ProveedorRepository{
    async create(autorData) {
        return await Proveedor.create(autorData);
    }
    async getAll() {
        return await Proveedor.findAll();
    }
    async getById(id) {
        return await Proveedor.findByPk(id);
    }
    async update(id, usuarioData) {
        return await Proveedor.update(usuarioData, { where: { id_proveedor: id } });
    }
    async delete(id) {
        return await Proveedor.destroy({ where: { id_proveedor: id } });
    }
}
module.exports = new ProveedorRepository();