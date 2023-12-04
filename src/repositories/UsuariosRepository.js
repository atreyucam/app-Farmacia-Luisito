const {Usuario} = require('../models/modeloBaseDatos.js');

class UsuarioRepository{
    async create(autorData) {
        return await Usuario.create(autorData);
    }
    async getAll() {
        return await Usuario.findAll();
    }
    async getById(id) {
        return await Usuario.findByPk(id);
    }
    async update(id, usuarioData) {
        return await Usuario.update(usuarioData, { where: { id_usuario: id } });
    }
    async delete(id) {
        return await Usuario.destroy({ where: { id_usuario: id } });
    }
}
module.exports = new UsuarioRepository();