const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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


    //--------------------------------------------
    // Metodos de logica de negocio
    // Funciones de Autenticacion

    async register (req, res){
        try {
            const hashedPassword = await bcrypt.hash(req.body.passwordUser, 10);
            const usuario = await UsuariosModel.create({ ...req.body, passwordUser: hashedPassword });
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
    async login(req, res) {
        try {
            const usuario = await UsuariosModel.getByEmail(req.body.emailUser);
            if (!usuario) return res.status(401).json({ message: 'Autenticación fallida' });

            const match = await bcrypt.compare(req.body.passwordUser, usuario.passwordUser);
            if (!match) return res.status(401).json({ message: 'Autenticación fallida' });

            const token = jwt.sign({ userId: usuario.id_usuario, roleUser: usuario.roleUser }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getPerfil(req, res) {
        try {
            const usuario = await UsuariosModel.getById(req.usuario.userId);
            if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
            res.json({ nombre: usuario.nombre, roleUser: usuario.roleUser });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}




module.exports = new UsuarioController();