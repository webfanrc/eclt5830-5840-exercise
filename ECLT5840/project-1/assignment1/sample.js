const express = require('express');
const app = express();

// The model with item related functions 
const items = require('./js/item');

// This example shows how to call items.getAll(), items.create(), 
// and items.findById()
app.get('/*', (req, res) => {
  let before = items.getAll();  // Get an array of all items in the "mock database"

  let newItem = { title: 'New Item', imgUrl: '1.jpg', price: 33 } ;
  items.create(newItem);        // Add an item to the "mock database"
                                // There is no need to specify the 'id' property;
                                // The "mock database" will assign an id to the item.
  console.log('The id of the new item is', newItem.id);

  let after = items.getAll();   // Should always call items.getAll() to get the updated 
                                // list of items.

  console.log('Before adding new item', before);
  console.log('After adding new item', after);
  console.log('---');

  let item1 = items.findById(1);  // items.findById() return the item
                                  // with the specified id in the "mock database".
  console.log('item1', item1);

  // item with this id does not exist, so item2 should be undefined
  let item2 = items.findById(10000);   
  console.log('item2', item2);

  res.end();
});

app.listen(8080);
