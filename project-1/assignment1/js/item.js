let maxId = 10;
let items = [
{ id: 1, title: 'Item 1: Apple', imageUrl: '1.jpg', price: 10 },
{ id: 2, title: 'Item 2: Banana', imageUrl: '2.jpg', price: 20 },
{ id: 3, title: 'Item 3: Pear', imageUrl: '3.jpg', price: 30 },
{ id: 4, title: 'Item 4: Peach', imageUrl: '4.jpg', price: 40 },
{ id: 5, title: 'Item 5: Orange', imageUrl: '5.jpg', price: 50 },
{ id: 6, title: 'Item 6: Rambutan', imageUrl: '6.jpg', price: 60 },
{ id: 7, title: 'Item 7: Plum', imageUrl: '7.jpg', price: 70 },
{ id: 8, title: 'Item 8: Lychee', imageUrl: '8.jpg', price: 80 },
{ id: 9, title: 'Item 9: Mango', imageUrl: '9.jpg', price: 90 },
{ id: 10, title: 'Item 10: Kiwi Fruit', imageUrl: '10.jpg', price: 99 }
];

// Add a new item, then return the id of the new item
function create(item) {
  if (!item.id)
    item.id = maxId + 1;
  else
  if (findById(item.id))
    throw `item's id (${item.id}) already exists in the DB`;

  maxId = Math.max(maxId, item.id);

  items.push(item);

  console.log(item.id);
  return item.id;
}

// Return the item with the specified id (if found). Otherwise return undefined.
function findById(itemId) {
  return items.find(ele => ele.id === itemId);
}

// Return an array of all items
function getAll() {
  return JSON.parse(JSON.stringify(items));
}

module.exports = {
  create,
  findById,
  getAll,
};
