const AlertasModel = require('../repositories/AlertasRepository');

class AlertasController {
    async create(req, res) {
        try {
            const alerta = await AlertasModel.create(req.body);
            res.status(201).json(alerta);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const alerta = await AlertasModel.getAll();
            res.json(alerta);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const alerta = await AlertasModel.getById(req.params.id);
            if (alerta) {
                res.json(alerta);
            } else {
                res.status(404).json({ message: 'alerta no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const updated = await AlertasModel.update(req.params.id, req.body);
            if (updated[0]) {
                res.json({ message: 'alerta actualizada' });
            } else {
                res.status(404).json({ message: 'alerta no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const result = await AlertasModel.delete(req.params.id);
            if (result) {
                res.status(200).json({ message: 'alerta eliminada' });
            } else {
                res.status(404).json({ message: 'alerta no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new AlertasController();
