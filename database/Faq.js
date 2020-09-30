const Sequelize = require('sequelize');
const sequelize = require('./index.js');

const FaqTable = sequelize.define('faqTable', {
  id: {type: Sequelize.INTEGER, autoIncrement: true, unique: true, allowNull: false, primaryKey: true},
  question: {type: Sequelize.STRING, allowNull: false},
  answer: {type: Sequelize.STRING, allowNull: false},

  sellerID: {type:Sequelize.INTEGER, allowNull: false}
});

module.exports = FaqTable;
