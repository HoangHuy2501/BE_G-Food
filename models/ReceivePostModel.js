const { DataTypes } = require('sequelize');
const sequelize = require('../config/connectData');

const ReceivePostModel = sequelize.define('receive_post', {
  id: { type: DataTypes.UUID, primaryKey: true },
  postshareid: DataTypes.UUID,
  userid: DataTypes.UUID,
  createat: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'receive_post',
  timestamps: false
});

module.exports = ReceivePostModel;
