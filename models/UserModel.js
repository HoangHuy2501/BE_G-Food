const { DataTypes } = require('sequelize');
const sequelize = require('../config/connectData');

const UserModel = sequelize.define('User', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  username: DataTypes.TEXT,
  email: DataTypes.TEXT,
  password: DataTypes.STRING,
  sex: DataTypes.BOOLEAN,
  status: DataTypes.BOOLEAN,
  phone: DataTypes.STRING,
  location: DataTypes.TEXT,
  createat: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'User',
  timestamps: false
});

module.exports = UserModel;
