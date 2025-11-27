const { DataTypes } = require('sequelize');
const sequelize = require('../config/connectData');

const RoleModel = sequelize.define('Role', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  rolename: DataTypes.TEXT
}, {
  tableName: 'Role',
  timestamps: false
});

module.exports = RoleModel;
