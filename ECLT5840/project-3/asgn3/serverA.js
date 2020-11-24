let express = require('express');
let app = express();
const items = require('./js/item');

app.get('/favicon.ico', (req, res) => { res.status(204).end(); });

app.get('/getItems', function(req, res) {
  let allItems = items.getAll();
  res.set('Cache-Control', 'no-cache');
  res.json(allItems); 
});

// Match all unmatched URLs to the files in "public" subfolder.
app.use(express.static('public'));


app.listen(8080);
