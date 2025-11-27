const { DataTypes } = require('sequelize');
const sequelize = require('../config/connectData');

const CommentModel = sequelize.define('Comment', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    postshareid: DataTypes.UUID,
    userid: DataTypes.UUID,
  content: DataTypes.TEXT,
  createat: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'Comment',
  timestamps: false
});

module.exports = CommentModel;
