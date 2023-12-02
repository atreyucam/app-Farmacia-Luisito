const express = require("express");
const UsuarioRoutes = require('./src/routes/db_routes');
const { sequelize } = require('./src/connections/connectionDataBase');

// Comprobacion de tablas en PostgreSQL
sequelize.sync({ force: false }).then(() => {
    console.log("Tablas sincronizadas");
  }).catch(error => {
    console.error('Error al sincronizar las tablas:', error);
  });
  

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use('/api', UsuarioRoutes);

app.listen(port, () => {
  console.log(`App Farmacia-Luisito http://localhost:${3000}`);
});
