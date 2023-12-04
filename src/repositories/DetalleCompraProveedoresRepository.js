const { Detalle_CompraProveedor, Producto ,Compra_Proveedor} = require('../models/modeloBaseDatos.js');
const ProductosRepository = require('../repositories/productosRepository'); // Asegúrate de que la ruta sea correcta
// const Compra_Proveedor = require('../repositories/CompraProveedoresRepository');
class DetalleCompraProveedoresRepository {
    async create(detalleCompraData) {
        // Verificar si el producto existe
        const producto = await Producto.findByPk(detalleCompraData.id_producto);

        // Si el producto no existe, crea uno en estado de revisión
        if (!producto) {
            const datosProductoTemp = {
                nombreProducto: 'Producto Temporal', // o algún otro nombre genérico
                descripcion: 'Descripción temporal',
                categoria: 'Categoría temporal',
                reqReceta: false, // o un valor por defecto adecuado
                cantidad: 0, // o un valor inicial
                // otros campos necesarios
                enRevision: true
            };
            const productoEnRevision = await ProductosRepository.createProductoEnRevision(datosProductoTemp);
            detalleCompraData.id_producto = productoEnRevision.id_producto;
        }
        // Crear el detalle de la compra
        return await Detalle_CompraProveedor.create(detalleCompraData);
    }

    async getAll() {
        return await Detalle_CompraProveedor.findAll({
            include: [Producto, Compra_Proveedor]
        });
    }

    async getById(id) {
        return await Detalle_CompraProveedor.findByPk(id, {
            include: [Producto, Compra_Proveedor]
        });
    }

    async update(id, detalleCompraData) {
        return await Detalle_CompraProveedor.update(detalleCompraData, {
            where: { id_compraDetalle: id }
        });
    }

    async delete(id) {
        return await Detalle_CompraProveedor.destroy({
            where: { id_compraDetalle: id }
        });
    }
}

module.exports = new DetalleCompraProveedoresRepository();
