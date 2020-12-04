/*
  The createPool() of "promise-mysql" creates pool asynchronously. Which is not
  convenient for testing the model from CLI.

  This version use "mysql" instead of "promise-mysql". 
  It uses the createPool() from "mysql" to creates pool synchronously,
  and then manually promisifies a subset of the DB functions used in the models.

  Note: 
  Promisify an asynchronous function in the form "function (err, value) { ... }"
  means, "make the functin returns a Promise object with resolved/rejected value".
  For more info about Util.promisify(), see 
  https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original

*/

const mysql = require('mysql');
const options = require('../config/mysql');
const util = require('util');          // Need this Node module for Util.promisify()

// Create pool synchronously
let pool = mysql.createPool(options);


// Here, I am only promisifying a subset of DB functions used in this sample app.
// If you are using other methods in the "pool" object, you should also promisify 
// them if you want to use Promise or await/async in your code.
pool.getConnection = util.promisify(pool.getConnection);
pool.query = util.promisify(pool.query);
pool.end = util.promisify(pool.end);


module.exports = pool;

