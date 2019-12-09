const mysql = require('mysql');
let connection;

if (process.env.MYSQL_URI) {
  connection = mysql.createConnection(process.env.MYSQL_URI);
} else {
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'santiago',
    password : '1234',
    database : 'test'
  });
}

module.exports = connection;
