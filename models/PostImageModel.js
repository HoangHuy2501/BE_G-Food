const { DataTypes } = require('sequelize');
const sequelize = require('../config/connectData');

const PostImageModel = sequelize.define('Post_image', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  postshareid: DataTypes.UUID,
  image: DataTypes.TEXT,
  publicid: DataTypes.TEXT
}, {
  tableName: 'Post_image',
  timestamps: false
});

module.exports = PostImageModel;
