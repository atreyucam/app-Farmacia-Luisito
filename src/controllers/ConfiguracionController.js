const ConfiguracionModel = require("../repositories/ConfiguracionRepository");

class ConfiguracionController {
  async setConfig(req, res) {
    try {
      const configData = await ConfiguracionModel.setConfig(req.body);
      res.status(201).json(configData);
      // res.json({ message: "Configuración actualizada" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async getConfig(req, res) {
    try {
      const configData = await ConfiguracionModel.getConfig();
      res.json(configData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async getConfigById(req, res) {
    try {
      const configData = await ConfiguracionModel.getConfigById(req.params.id);
      res.json(configData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async update(req, res) {
    try {
      const updated = await ConfiguracionModel.update(req.params.id, req.body);
      res.json(updated);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async delete(req, res) {
    try {
      await ConfiguracionModel.delete(req.params.id);
      res.status(200).send("configuracion eliminado");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ConfiguracionController();
