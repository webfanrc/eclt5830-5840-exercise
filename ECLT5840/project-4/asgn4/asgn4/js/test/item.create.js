// Test item creation (Does not include all possible test cases)

let db = require('../db');
let Item = require('../item');

async function main() {
  let item_id;

  try {
    let item1 = { id: undefined, title: 'Test Item #1', price: 0, image_url: '1.jpg' };

    item_id = await Item.create(item1);
    console.log(`Item.create(): Created an item with DB-generated ID`, item1);

  } catch (err) {
    console.error(err);
  }

  // Duplicate id
  try {
    let item2 = { id: item_id, title: 'Test Item #2', price: 100, image_url: '2.jpg' };
    await Item.create(item1);

    console.error("Error: Item.create() should have thrown an exception");

  } catch (err) {
    console.log('Item.create(): Success in detecting duplicate item ID: ', item_id);
  }

  await db.end();

}

main();
