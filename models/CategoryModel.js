const { DataTypes } = require('sequelize');
const sequelize = require('../config/connectData');

const CategoryModel = sequelize.define('Category', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  name: DataTypes.TEXT,
  description: DataTypes.TEXT
}, {
  tableName: 'Category',
  timestamps: false
});

module.exports = CategoryModel;
