const Sequelize = require('sequelize');
const sequelize = require('./index.js');

const SellerTable = sequelize.define('sellerTable', {
  id: {type: Sequelize.INTEGER, autoIncrement: true, unique: true, allowNull: false, primaryKey: true},
  sellerName: {type: Sequelize.STRING, allowNull: false},
  storeName: {type: Sequelize.STRING, allowNull: false},
  shippingSpeedSlowest: {type: Sequelize.INTEGER, allowNull: false, defaultValue: 3},
  shippingSpeedFastest: {type: Sequelize.INTEGER, allowNull: false, defaultValue: 8},
  sellerLocation: {type:Sequelize.STRING, allowNull: false},
  exchangePossibility: {type:Sequelize.BOOLEAN, allowNull: false, defaultValue: true},
  returnCancelPossibility: {type:Sequelize.BOOLEAN, allowNull: false, defaultValue: true}
});

module.exports = SellerTable;