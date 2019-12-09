const mysql = require('mysql');

module.exports = mysql.createConnection({
  host     : 'localhost',
  user     : 'santiago',
  password : '1234',
  database : 'test'
});
