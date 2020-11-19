const conn = require('./db.js');

// This file contains some helper functions to manipulate user data
// in the "users" table. The code here aims to demonstrate
// how to perform CRUD operations with the mysql APIs..

// Get user record (without the password field) by user_id
async function getUser(user_id) {
  let sql = `SELECT user_id, first_name, last_name, email, reg_date
             FROM users WHERE user_id=?`;
  let data = [ user_id ];
  let results = await conn.query(sql, data);

  if (results.length == 0)
    return null;
  else
    return results[0];
}

// Get user email (without the password field) by email
async function getUserByEmail(email) {
  let sql = `SELECT user_id, first_name, last_name, email, reg_date
             FROM users WHERE user_id=?`;
  let data = [ email ];

  let results = await conn.query(sql, data);
  if (results.length == 0)
    return null;
  else
    return results[0];
}

// Add a new user
async function addUser(user) {
  let sql = `INSERT INTO users (first_name, last_name, email, pass)
             VALUES (?, ?, ?, SHA1(?))`;

  let data = [ user.first_name, user.last_name, user.email, user.pass ];
  let result = await conn.query(sql, data);

  // insertId is the user_id assigned by DB (because of AUTO_INCREMENT)
  return result.insertId;
}

// Update all user properties (except the password field)
// Password is normally updated separately
async function updateUser(user) {
  let sql = `UPDATE users SET first_name=?, last_name=?, email=?
             WHERE user_id=?`;
  let data = [ user.first_name, user.last_name, user.email,
               user.user_id ];

  let result = await conn.query(sql, data);
  return result.affectedRow;
}

async function deleteUser(user_id) {
  let sql = `DELETE FROM users WHERE user_id=?`;
  let data = [ user_id ];
  let result = await conn.query(sql, data);
  return result.affectedRow;
}

// Return a user object (containing user_id, first_name, last_name, email)
// if authentication succeeds. Otherwise the function returns null.
async function authenticate(email, pass) {
  let sql = `SELECT user_id, first_name, last_name, email FROM users
             WHERE email=? AND pass=SHA1(?)`;
  let data = [ email, pass ];

  let results = await conn.query(sql, data);

  if (results.length != 1)
    return null;
  else
    return results[0];
}

module.exports = {
  getUser: getUser,
  addUser: addUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
  authenticate: authenticate,
  getUserByEmail: getUserByEmail
}
