const readXlsxFile = require('read-excel-file/node');
const {Proveedor} = require('../../models/modelDataBase'); // Ajusta la ruta según sea necesario

class ProveedorImportController {
    static async import(req, res) {
        try {
            const filePath = req.file.path;
            const rows = await readXlsxFile(filePath);
            rows.shift(); // Elimina la fila de encabezados

            for (const row of rows) {
                const proveedor = {
                    id_proveedor: row[0],
                    ruc: row[1],
                    nombreProveedor: row[2],
                    direccionProveedor: row[3],
                    telefonoProveedor: row[4],
                    emailProveedor: row[5],
                };

                await Proveedor.create(proveedor);
            }

            res.send('Proveedores importados exitosamente');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al importar proveedores');
        }
    }
}

module.exports = ProveedorImportController;