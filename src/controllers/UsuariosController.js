const UsuariosModel = require('../repositories/UsuariosRepository');

class UsuarioController{
    async create(req,res){
        try {
            const usuario = await UsuariosModel.create(req.body);
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
    async getAll(req,res){
        try {
            const usuario = await UsuariosModel.getAll();
            res.json(usuario);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
    async getById(req, res) {
        try {
            const usuario = await UsuariosModel.getById(req.params.id);
            res.json(usuario);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async update(req, res) {
        try {
            const updated = await UsuariosModel.update(req.params.id, req.body);
            res.json(updated);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async delete(req, res) {
        try {
            await UsuariosModel.delete(req.params.id);
            res.status(200).send('Usuario eliminado');
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


    


}




module.exports = new UsuarioController();