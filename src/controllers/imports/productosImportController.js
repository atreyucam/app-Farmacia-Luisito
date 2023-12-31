const readXlsxFile = require('read-excel-file/node');
const {Producto} = require('../../models/modelDataBase'); // Ajusta la ruta según sea necesario

class ProductosImportController {
    static async import(req, res) {
        try {
            const filePath = req.file.path;
            const rows = await readXlsxFile(filePath);
            rows.shift(); // Elimina la fila de encabezados

            for (const row of rows) {
                const producto = {
                    id_producto: row[0],
                    nombreProducto: row[1],
                    descripcion: row[2],
                    categoria: row[3],
                    fechaCaducidad: row[4],
                    reqReceta: row[5],
                    cantidad: row[6],
                    fechaActualizacion: row[7],
                    enRevision: row[8]
                };

                await Producto.create(producto);
            }

            res.send('Productos importados exitosamente');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al importar productos');
        }
    }
}

module.exports = ProductosImportController;