const { Venta } = require("../models/modelDataBase");
const { Configuracion } = require("../models/tablaConfiguracion");

class VentaRepository {
  // async create(datosVenta) {
  //     return await Venta.create(datosVenta);
  // }
  async create(datosVenta) {
    const ivaConfig = await Configuracion.findOne({ where: { clave: "IVA" } });
    const iva = ivaConfig ? parseFloat(ivaConfig.valor) : 0.12;

    let total = datosVenta.subTotalVenta;
    total += total * (iva / 100);

    if (datosVenta.descuentoVenta) {
      total -= datosVenta.descuentoVenta;
    }

    const nuevaVenta = await Venta.create({
      ...datosVenta,
      IVA_venta: iva,
      totalVenta: total,
    });
    return nuevaVenta;
  }

  async getAll() {
    return await Venta.findAll();
  }

  async getById(id) {
    return await Venta.findByPk(id);
  }

  async update(id, datosVenta) {
    return await Venta.update(datosVenta, { where: { id_venta: id } });
  }

  async delete(id) {
    return await Venta.destroy({ where: { id_venta: id } });
  }
}

module.exports = new VentaRepository();
