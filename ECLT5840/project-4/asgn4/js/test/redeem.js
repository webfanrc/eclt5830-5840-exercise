let db = require('../db');
let Redeem = require('../redeem');

async function main() {
  try {

    await Redeem.redeem(1, 2);
    await Redeem.redeem(1, 10);
    await Redeem.redeem(1, 10);
    await Redeem.redeem(1, 10);
    await Redeem.redeem(1, 10);

    // Retrieve the five most recently added items (assume no other 
    // process is modifying the table "redeemed_items")
    let results = await db.query(
       "SELECT * FROM redeemed_items WHERE user_id=1 ORDER BY redeemed_id DESC LIMIT 5");

    console.log("5 most recently added items: ");
    console.log(results);

  } catch (err) {
    console.error(err);

  } finally {
    await db.end();
  }
}

main();
