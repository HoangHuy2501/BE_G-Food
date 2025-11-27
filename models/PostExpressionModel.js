const { DataTypes } = require('sequelize');
const sequelize = require('../config/connectData');

const PostExpressionModel = sequelize.define('Post_expression', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    postshareid: DataTypes.UUID,
    expressionid: DataTypes.UUID,
    userid: DataTypes.UUID
}, {
  tableName: 'post_expression',
  timestamps: false
});

module.exports = PostExpressionModel;
