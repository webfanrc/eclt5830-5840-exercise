let db = require('../db');
let Item = require('../item');

async function main() {
  try {
    let items = await Item.getAll();

    
    console.log(`Item.getAll(): Retrieved ${items.length} items.`);

  } catch (err) {
    console.error(err);
  }

  await db.end();
}

main();
