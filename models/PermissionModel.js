const { DataTypes } = require('sequelize');
const sequelize = require('../config/connectData');

const PermissionModel = sequelize.define('Permission', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  permissionname: DataTypes.TEXT
}, {
  tableName: 'Permission',
  timestamps: false
});

module.exports = PermissionModel;
