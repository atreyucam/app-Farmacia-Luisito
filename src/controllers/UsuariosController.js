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


    async authenticate(req, res) {
        try {
            const { emailUser, passwordUser } = req.body;
    
            // Check if both emailUser and passwordUser are provided in the request body
            if (!emailUser || !passwordUser) {
                return res.status(400).json({ error: 'Se requiere correo electrónico y contraseña.' });
            }
    
            // Call the authentication function from UsuariosModel
            const usuario = await UsuariosModel.getByEmailAndPassword(emailUser, passwordUser);
    
            // Check if authentication was successful
            if (usuario) {
                // Determine the role of the user
                const role = usuario.roleUser;
    
                // Respond with role-specific messages
                if (role === 'cliente') {
                    res.json({ message: 'BIENVENIDO CLIENTE' });
                } else if (role === 'administrador') {
                    res.json({ message: 'BIENVENIDO ADMINISTRADOR' });
                } else {
                    // Handle other roles if needed
                    res.json({ message: 'Autenticación exitosa' });
                }
            } else {
                // If authentication fails, respond with an error message
                res.status(401).json({ error: 'La autenticación falló. Correo electrónico o contraseña no válida.' });
            }
        } catch (error) {
            // If an error occurs during the process, respond with a 500 Internal Server Error
            // and send the error message as JSON
            res.status(500).json({ error: error.message });
        }
    }

}
module.exports = new UsuarioController();
//Rama personal VictorXpress