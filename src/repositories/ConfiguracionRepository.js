const { Configuracion } = require("../models/tablaConfiguracion");

class ConfiguracionRepository {
  async setConfig(configData) {
    return await Configuracion.create(configData);
  }
  async getConfig() {
    return await Configuracion.findAll();
  }
  async getConfigById(id) {
    return await Configuracion.findByPk(id);
  }
  async update(id, usuarioData) {
    return await Configuracion.update(usuarioData, {
      where: { id_configuracion: id },
    });
  }
  async delete(id) {
    return await Configuracion.destroy({ where: { id_configuracion: id } });
  }
}

module.exports = new ConfiguracionRepository();
