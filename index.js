// version 0.1 - dev

// const express = require("express");
// const routesApp = require('./src/routes/db_routes');
// const { sequelize } = require('./src/connections/connectionDataBase');

// // Comprobacion de tablas en PostgreSQL
// sequelize.sync({ force: false }).then(() => {
//     console.log("Tablas sincronizadas");
//   }).catch(error => {
//     console.error('Error al sincronizar las tablas:', error);
//   });
  

// const app = express();
// const port = 3000;
// app.use(express.json());


// app.use('/api', routesApp);

// app.listen(port, () => {
//   console.log(`App Farmacia-Luisito http://localhost:${3000}`);
// });


//version 0.2 - dev

const express = require("express");
const app = express();
const port = 3000;

const routesApp = require('./src/routes/db_routes');
const { sequelize } = require('./src/connections/connectionDataBase');

// Comprobacion de tablas en PostgreSQL
sequelize.sync({ force: false }).then(() => {
    console.log("Tablas sincronizadas");
  }).catch(error => {
    console.error('Error al sincronizar las tablas:', error);
  });
  
// Configuración para servir archivos estáticos
app.use(express.static('public'));

// ... Resto de tu código ...

app.use('/api', routesApp);

app.listen(port, () => {
  console.log(`App Farmacia-Luisito en http://localhost:${port}`);
});
