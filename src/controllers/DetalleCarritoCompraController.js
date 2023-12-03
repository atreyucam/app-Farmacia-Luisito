
const DetalleCarritoCompraModel = require('../repositories/DetalleCarritoComprasRepository');

class DetalleCarritoCompraController {
    async create(req, res) {
        try {
            const detalleCarritoCompra = await DetalleCarritoCompraModel.create(req.body);
            res.status(201).json(detalleCarritoCompra);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const detalleCarritoCompra = await DetalleCarritoCompraModel.getAll();
            res.json(detalleCarritoCompra);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const detalleCarritoCompra = await DetalleCarritoCompraModel.getById(req.params.id);
            if (detalleCarritoCompra) {
                res.json(detalleCarritoCompra);
            } else {
                res.status(404).json({ message: 'detalle carrito compra no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const updated = await DetalleCarritoCompraModel.update(req.params.id, req.body);
            if (updated[0]) {
                res.json({ message: 'detalle carrito compra actualizada' });
            } else {
                res.status(404).json({ message: 'detalle carrito compra no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const result = await DetalleCarritoCompraModel.delete(req.params.id);
            if (result) {
                res.status(200).json({ message: 'detalle carrito compra  eliminada' });
            } else {
                res.status(404).json({ message: 'detalle carrito compra no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new DetalleCarritoCompraController();