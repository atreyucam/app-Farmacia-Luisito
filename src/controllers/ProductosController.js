const ProductosModel = require('../repositories/productosRepository');

class ProductosController {
    async create(req, res) {
        try {
            const producto = await ProductosModel.create(req.body);
            res.status(201).json(producto);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const productos = await ProductosModel.getAll();
            res.json(productos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const producto = await ProductosModel.getById(req.params.id);
            if (producto) {
                res.json(producto);
            } else {
                res.status(404).json({ message: 'Producto no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const updated = await ProductosModel.update(req.params.id, req.body);
            if (updated[0]) {
                res.json({ message: 'Producto actualizado' });
            } else {
                res.status(404).json({ message: 'Producto no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const result = await ProductosModel.delete(req.params.id);
            if (result) {
                res.status(200).json({ message: 'Producto eliminado' });
            } else {
                res.status(404).json({ message: 'Producto no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ProductosController();
