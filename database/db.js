const mysql = require('mysql');
const Promise = require('bluebird');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
});

const db = Promise.promisifyAll(connection, {multiArgs: true});

module.exports = db;