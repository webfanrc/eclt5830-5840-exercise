// Test item deletion

let db = require('../db');
let Item = require('../item');

async function main() {
  try {
    let item1 = { id: undefined, title: 'Test Item #1', price: 0 };

    let id = await Item.create(item1);

    let affectedRow = await Item.remove(id);  // expect 1 row deleted
    if (affectedRow == 1)
      console.log(`Item.remove(): Succeed in deleting an exising item`);


    affectedRow = await Item.remove(id);  // expect 0 row deleted
    if (affectedRow == 0)
      console.log(`Item.remove(): Succeed in not deleting a non-exising item`);

  } catch (err) {
    console.error(err);
  }

  await db.end();
}

main();
