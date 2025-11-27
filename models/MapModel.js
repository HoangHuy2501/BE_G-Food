const { DataTypes } = require('sequelize');
const sequelize = require('../config/connectData');

const MapModel = sequelize.define('Map', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  userid: DataTypes.UUID,
  lat: DataTypes.DOUBLE,
  lng: DataTypes.DOUBLE
}, {
  tableName: 'Map',
  timestamps: false
});

module.exports = MapModel;
