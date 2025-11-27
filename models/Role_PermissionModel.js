const { DataTypes } = require('sequelize');
const sequelize = require('../config/connectData');

const RolePermissionModel = sequelize.define('role_permission', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    roleid: DataTypes.UUID,
    permissionid: DataTypes.UUID
}, {
  tableName: 'role_permission',
  timestamps: false
});

module.exports = RolePermissionModel;
