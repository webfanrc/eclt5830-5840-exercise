let db = require('../db');
let Item = require('../item');

async function main() {
  try {
    let item = {title: 'update(): Test Item #1', price: 100, image_url: '1.jpg' };
    let id = await Item.create(item);

    item.title = 'update(): New item title';
    item.price = 200;

    let affectedRows  = await Item.update(item);
    if (affectedRows != 1)
      throw `Error: # of affected row after update() is not 1`;

    let item2 = await Item.findById(id);

    if (item2.title != item.title || 
        item2.price != item.price ||
        item2.image_url != item.image_url)
      throw `Item.update(): Some fields are not updated properly`;

  } catch (err) {
    console.error(err);
  }

  await db.end();
}

main();
