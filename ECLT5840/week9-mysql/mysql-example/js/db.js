let mysql = require('promise-mysql');

let config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'eclt5830',
  connectionLimit: 10
};

// Use connection pool (which has the same interface as a
// connection object)
const pool = mysql.createPool(config);

module.exports = pool;
 
