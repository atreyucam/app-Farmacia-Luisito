const { DataTypes } = require("sequelize");
const { sequelize } = require("../connections/connectionDataBase");

// Tabla de configuracion
const Configuracion = sequelize.define(
  "Configuracion",
  {
    id_configuracion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    clave: { type: DataTypes.STRING(30), allowNull: false, unique: true },
    valor: { type: DataTypes.STRING(30), allowNull: false },
  },
  { tableName: "configuraciones" }
);

module.exports = { Configuracion };
