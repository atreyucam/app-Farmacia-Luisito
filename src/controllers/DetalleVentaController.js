const DetalleVentaModel = require('../repositories/DetalleVentaRepository');

class DetalleVentaController {
    async create(req, res) {
        try {
            const detalleVenta = await DetalleVentaModel.create(req.body);
            res.status(201).json(detalleVenta);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const detalleVenta = await DetalleVentaModel.getAll();
            res.json(detalleVenta);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const detalleVenta = await DetalleVentaModel.getById(req.params.id);
            if (detalleVenta) {
                res.json(detalleVenta);
            } else {
                res.status(404).json({ message: 'Detalle venta no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const updated = await DetalleVentaModel.update(req.params.id, req.body);
            if (updated[0]) {
                res.json({ message: 'Detalle venta actualizado' });
            } else {
                res.status(404).json({ message: 'Detalle venta no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const result = await DetalleVentaModel.delete(req.params.id);
            if (result) {
                res.status(200).json({ message: 'Detalle venta eliminado' });
            } else {
                res.status(404).json({ message: 'Detalle venta no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new DetalleVentaController();
