const Proveedor = require('../repositories/ProveedoresRepository');

class ProveedorController{
    async create(req,res){
        try {
            const proveedor = await Proveedor.create(req.body);
            res.status(201).json(proveedor);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
    async getAll(req,res){
        try {
            const proveedor = await Proveedor.getAll();
            res.json(proveedor);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
    async getById(req, res) {
        try {
            const proveedor = await Proveedor.getById(req.params.id);
            res.json(proveedor);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async update(req, res) {
        try {
            const proveedor = await Proveedor.update(req.params.id, req.body);
            res.json(proveedor);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async delete(req, res) {
        try {
            await Proveedor.delete(req.params.id);
            res.status(200).send('proveedor eliminado');
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
module.exports = new ProveedorController();