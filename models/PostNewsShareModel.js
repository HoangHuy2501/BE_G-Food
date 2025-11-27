const { DataTypes } = require('sequelize');
const sequelize = require('../config/connectData');

const PostNewsShareModel = sequelize.define('Post_news_share', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  userid: DataTypes.UUID,
  categoryid: DataTypes.UUID,
  content: DataTypes.TEXT,
  status: DataTypes.TEXT,
  createat: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'Post_news_share',
  timestamps: false
});

module.exports = PostNewsShareModel;
