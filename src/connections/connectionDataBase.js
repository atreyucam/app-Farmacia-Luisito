const { Sequelize } = require('sequelize');

const database = "DB_farmacia-Luisito";
const username = "postgres";
const password = "seguro10";
const host = "localhost";

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'postgres',
});

module.exports = {
  sequelize
}