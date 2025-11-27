const { DataTypes } = require('sequelize');
const sequelize = require('../config/connectData');

const UserRoleModel = sequelize.define('user_role', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  userid: DataTypes.UUID,
  roleid: DataTypes.UUID
}, {
  tableName: 'user_role',
  timestamps: false
});

module.exports = UserRoleModel;
