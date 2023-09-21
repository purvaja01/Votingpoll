const dotenv = require('dotenv');
// Load environment variables from a .env file
dotenv.config();

const Sequelize = require('sequelize');
const sequelize = new Sequelize('dbo', 'root', '12345678', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;

 