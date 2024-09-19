// configurando o Sequelize
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('DEMTEC_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
