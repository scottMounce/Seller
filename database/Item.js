const Sequelize = require('sequelize');
const db = require('./index.js');

const ItemTable = db.define('itemTable', {
  id: {type: Sequelize.INTEGER, autoIncrement: true, unique: true, allowNull: false, primaryKey: true},
  handmade: {type:Sequelize.BOOLEAN, allowNull: false, defaultValue: true},
  materials: {type: Sequelize.STRING, allowNull: false},
  description: {type: Sequelize.TEXT, allowNull: false},

  sellerID: {type:Sequelize.INTEGER, allowNull: false}
});

module.exports = ItemTable;
