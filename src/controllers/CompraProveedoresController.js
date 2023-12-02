const CompraProveedoresModel = require('../repositories/CompraProveedoresRepository');

class CompraProveedoresController {
    async create(req, res) {
        try {
            const compraProveedor = await CompraProveedoresModel.create(req.body);
            res.status(201).json(compraProveedor);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const compraProveedor = await CompraProveedoresModel.getAll();
            res.json(compraProveedor);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const compraProveedor = await CompraProveedoresModel.getById(req.params.id);
            if (compraProveedor) {
                res.json(compraProveedor);
            } else {
                res.status(404).json({ message: 'compra proveedor no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const updated = await CompraProveedoresModel.update(req.params.id, req.body);
            if (updated[0]) {
                res.json({ message: 'compra proveedor actualizada' });
            } else {
                res.status(404).json({ message: 'compra proveedor no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const result = await CompraProveedoresModel.delete(req.params.id);
            if (result) {
                res.status(200).json({ message: 'compra proveedor eliminada' });
            } else {
                res.status(404).json({ message: 'compra proveedor no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new CompraProveedoresController();
