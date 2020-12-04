const db = require('./db');
const util = require('util');

/* 
  This function carries out a transaction to redeem an item for a user in the 
  following manner:
    1) token_balance = Get the user's token_balance from table "user". 
                       (and lock the corresponding row in the table)
      
    2) item_price = Get item's price
    3) Proceed to (4) if token_balance >= item_price. Otherwise rollback
    4) Deduct price from user's token_balance
    5) Add a row to table "redeemed_items" to record the transaction.
    6) Commit the transaction if steps 1-5 were successful. Otherwise rollback
*/

async function redeem(userId, itemId) {

  // Note: query() of connection pool (i.e., db.query()) will release the 
  // connection after the operation is performed.
  // In order to perform multiple operations within a transaction,
  // we need to perform all operations using the same connection.

  let C = await db.getConnection();   // Use the same connection for all operations 
  C.query = util.promisify(C.query); 

  try {
    let balance, price, results;

    // transaction begin
    await C.query('START TRANSACTION');

    // Get user's token balance
    let sql1 = `SELECT token_balance FROM users WHERE user_id=? LIMIT 1 FOR UPDATE`;
    let data1 = [ userId ];

    results = await C.query(sql1, data1);
    if (results.length == 0)
      throw `User with user_id=${userId} not found`;
    balance = results[0].token_balance;

    // Get price of item
    let sql2 = `SELECT price FROM items WHERE item_id=?`;
    let data2 = [ itemId ];

    results = await C.query(sql2, data2);
    if (results.length == 0)
      throw `Item with item_id=${itemId} not found`;
    price = results[0].price;

    if (balance < price)
      throw `token balance (${balance}) < item's price (${price})`;

    // update token balance and add an entry to redeemed_items
    let sql3 = `UPDATE users SET token_balance = token_balance-? WHERE user_id=?`;
    let data3 = [ price , userId ]; 
    await C.query(sql3, data3);

    let sql4 = `INSERT INTO redeemed_items (user_id, item_id) VALUES (?,?)`;
    let data4 = [ userId, itemId ];
    await C.query(sql4, data4);
 
    // commit
    await C.query('COMMIT');

  } catch (err) {

    // rollback
    await C.query('ROLLBACK');

    // rethrow error
    throw err;

  } finally {
    C.release();
    // transaction end
  }
}

module.exports = {
  redeem
}

