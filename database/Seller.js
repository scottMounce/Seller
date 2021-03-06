const Sequelize = require('sequelize');
const db = require('./index.js');

const SellerTable = db.define('sellerTable', {
  id: {type: Sequelize.INTEGER, autoIncrement: true, unique: true, allowNull: false, primaryKey: true},
  sellerName: {type: Sequelize.STRING, allowNull: false},
  storeName: {type: Sequelize.STRING, allowNull: false},
  shippingSpeedSlowest: {type: Sequelize.INTEGER, allowNull: false, defaultValue: 3},
  shippingSpeedFastest: {type: Sequelize.INTEGER, allowNull: false, defaultValue: 8},
  sellerLocation: {type:Sequelize.STRING, allowNull: false},
  exchangePossibility: {type:Sequelize.BOOLEAN, allowNull: false, defaultValue: true},
  returnCancelPossibility: {type:Sequelize.BOOLEAN, allowNull: false, defaultValue: true},
  profilePicture: {type: Sequelize.STRING, allowNull: false}
});

module.exports = SellerTable;