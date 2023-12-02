
const DetalleCompraProveedoresModel = require('../repositories/DetalleCompraProveedoresRepository');

class DetalleCompraProveedoresController {
    async create(req, res) {
        try {
            const detalleCompra = await DetalleCompraProveedoresModel.create(req.body);
            res.status(201).json(detalleCompra);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async getAll(req, res) {
        try {
            const detalles = await DetalleCompraProveedoresModel.getAll();
            res.json(detalles);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const detalle = await DetalleCompraProveedoresModel.getById(req.params.id);
            if (detalle) {
                res.json(detalle);
            } else {
                res.status(404).json({ message: 'Detalle no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const updated = await DetalleCompraProveedoresModel.update(req.params.id, req.body);
            if (updated[0]) {
                res.json({ message: 'Detalle actualizado' });
            } else {
                res.status(404).json({ message: 'Detalle no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const result = await DetalleCompraProveedoresModel.delete(req.params.id);
            if (result) {
                res.status(200).json({ message: 'Detalle eliminado' });
            } else {
                res.status(404).json({ message: 'Detalle no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new DetalleCompraProveedoresController();
