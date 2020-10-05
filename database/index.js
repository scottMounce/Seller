const Sequelize = require('sequelize');
const mysql = require('mysql2/promise');


const connection = mysql.createConnection({
  user: 'root',
  password: 'password',
})
  .then(db => {
    db.query(`CREATE DATABASE IF NOT EXISTS petsy_seller`)
      .then(() => {
        db.end();
      })
  })


const db = new Sequelize("petsy_seller", "root", "password",  {dialect: 'mysql', dialectOptions: {multipleStatements: true}})


module.exports = db;