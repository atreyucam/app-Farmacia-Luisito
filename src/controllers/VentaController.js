const VentaModel = require('../repositories/VentasRepository');


class VentaController {
    async create(req, res) {
        try {
            const ventaCliente = await VentaModel.create(req.body);
            res.status(201).json(ventaCliente);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const ventaCliente = await VentaModel.getAll();
            res.json(ventaCliente);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const ventaCliente = await VentaModel.getById(req.params.id);
            if (ventaCliente) {
                res.json(ventaCliente);
            } else {
                res.status(404).json({ message: 'venta cliente no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const updated = await VentaModel.update(req.params.id, req.body);
            if (updated[0]) {
                res.json({ message: 'venta cliente actualizada' });
            } else {
                res.status(404).json({ message: 'venta cliente no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const result = await VentaModel.delete(req.params.id);
            if (result) {
                res.status(200).json({ message: 'venta cliente eliminada' });
            } else {
                res.status(404).json({ message: 'venta cliente no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new VentaController();
