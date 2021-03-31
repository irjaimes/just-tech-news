const express = require('express'); 
const routes = require('./controllers/'); // all the api endpoints can be accessed from this file
const sequelize = require('./config/connection'); // import the connection
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public'))); // this path must be above the express json path
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);


const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on connection to db and server
// sync method means sequelize is taking models and connecting them toe associated db tables. if a table is not found it will create one.
sequelize.sync({ force: false }).then(() => { // force: true causes for db tables to be dropped and recreated if there are any association.
  app.listen(PORT, () => console.log('Now listening'));
});