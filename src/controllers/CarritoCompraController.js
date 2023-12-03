
const CarritoCompraModel = require('../repositories/CarritoCompraRepository');

class CarritoCompraController {
    async create(req, res) {
        try {
            const carritoCompra = await CarritoCompraModel.create(req.body);
            res.status(201).json(carritoCompra);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const carritoCompra = await CarritoCompraModel.getAll();
            res.json(carritoCompra);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const carritoCompra = await CarritoCompraModel.getById(req.params.id);
            if (carritoCompra) {
                res.json(carritoCompra);
            } else {
                res.status(404).json({ message: 'carrito compra no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const updated = await CarritoCompraModel.update(req.params.id, req.body);
            if (updated[0]) {
                res.json({ message: 'carrito compra actualizada' });
            } else {
                res.status(404).json({ message: 'carrito compra no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const result = await CarritoCompraModel.delete(req.params.id);
            if (result) {
                res.status(200).json({ message: 'carrito compra  eliminada' });
            } else {
                res.status(404).json({ message: 'carrito compra no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new CarritoCompraController();