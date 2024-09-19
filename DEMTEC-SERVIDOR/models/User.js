// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const User = sequelize.define('Usuario', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
