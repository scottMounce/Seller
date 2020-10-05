const Sequelize = require('sequelize');
const db = require('./index.js');

const FaqTable = db.define('faqTable', {
  id: {type: Sequelize.INTEGER, autoIncrement: true, unique: true, allowNull: false, primaryKey: true},
  question: {type: Sequelize.STRING, allowNull: false},
  answer: {type: Sequelize.TEXT, allowNull: false},

  sellerID: {type:Sequelize.INTEGER, allowNull: false}
});

module.exports = FaqTable;
