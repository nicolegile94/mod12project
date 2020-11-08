// get the client
const mysql = require('mysql2');
 
// Create the connection
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'company',
});

module.exports = pool;