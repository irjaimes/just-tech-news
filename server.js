const express = require('express'); 
const routes = require('./routes'); // all the api endpoints can be accessed from this file
const sequelize = require('./config/connection'); // import the connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
// sync method means sequelize is taking models and connecting them toe associated db tables. if a table is not found it will create one.
sequelize.sync({ force: false }).then(() => { // force: true would cause for db tables to be dropped and recreated
  app.listen(PORT, () => console.log('Now listening'));
});