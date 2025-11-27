const { DataTypes } = require('sequelize');
const sequelize = require('../config/connectData');

const ExpressionModel = sequelize.define('Expression', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  name: DataTypes.TEXT,
  description: DataTypes.TEXT
}, {
  tableName: 'Expression',
  timestamps: false
});

module.exports = ExpressionModel;
