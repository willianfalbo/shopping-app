const Sequelize = require('sequelize');

const sequelize = new Sequelize('shopping-app', 'root', 'willian.123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
