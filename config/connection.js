// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config(); // no need to set to variable, has credentials saved securely in root dir .env accesed below

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3306
});




module.exports = sequelize;