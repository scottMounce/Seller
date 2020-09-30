const Sequelize = require('sequelize');
const mysql = require('mysql2/promise');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
})
  .then(db =< {
    db.query(`CREATE DATABSE IF NOT EXIST petsy_seller`)
      .then(() => {
        db.end();
      })
  })


const sequelize = new Sequelize("petsy_seller", "root", "password",  {dialect: 'mysql', dialectOptions: {multipleStatements: true}})


module.exports = sequelize;