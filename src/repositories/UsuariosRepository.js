const {Usuario} = require('../models/modelDataBase');

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


    // Metodos de logica de negocio
    // login
    async getByEmail(email){
        return await Usuario.findOne({where: {emailUser: email}});
    }
}
module.exports = new UsuarioRepository();