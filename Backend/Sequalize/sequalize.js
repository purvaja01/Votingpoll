const dotenv = require('dotenv');

dotenv.config();

const Sequelize = require('sequelize');
const sequelize = new Sequelize('dbo', 'root', '12345678', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
