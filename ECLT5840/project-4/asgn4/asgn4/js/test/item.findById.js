// Test Item.findById()

let db = require('../db');
let Item = require('../item');

async function main() {
  try {
    let id = await Item.create({title: 'Test findById()', price: 101});

    let item = await Item.findById(id);
    if (item === null)
      throw "Item.findById() failed to find a newly created item by its id";

    console.log("Item.findbyId(): Succeed in finding an item");

    await Item.remove(id);
    item = await Item.findById(id);
    if (item !== null)
      throw "Item was removed by Item.findById() does not return null";

    console.log("Item.findbyId(): Succeed in not finding a non-existing item");

  } catch (err) {
    console.error(err);
  } finally {
    await db.end();
  }
}

main();
