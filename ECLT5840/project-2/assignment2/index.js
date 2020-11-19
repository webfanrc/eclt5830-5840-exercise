const express = require('express');
const app = express();
const port = 8080; // Assign Requirement
const items = require('./js/item');

const url = require('url');


app.use( express.static( "public" ) );

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


app.set('view engine', 'ejs');

// Insert your code here ...

app.get('/', function (req, res) {


    res.render('pages/index');
});


app.get('/item', function (req, res) {
    let ITEM_ID = Number(url.parse(req.url, true).query.id);
    let itemObj = items.findById(ITEM_ID);

    res.render('pages/item', {itemObj: itemObj});
});

// Items page(HTML)
app.get('/items', function (req, res) {

    res.render('pages/items');
});


// Get items method(json)
app.get("/getItems", (req, res) => {
    let allItems = items.getAll();
    res.set('Cache-Control', 'no-cache');
    res.json(allItems);
});

app.get('/addItem', function (req, res) {

    res.render('pages/addItem');
});

app.post('/create', function (req, res) {
    let formData = req.body;

    // console.log('form data', formData);

    if (validateData(formData)) {
        items.create(formData);
        res.render('pages/success');
    } else {
        res.render('pages/error');
    }
});

function validateData(formData) {
    let Imglist = [];
    for (let i = 1; i <= 10; i++) {
        Imglist.push(i + '.jpg');
    }
    return formData.title
        && formData.price >= 0 && formData.price <= 1000000
        && Imglist.indexOf(formData.imageUrl) !== -1;

}

app.listen(port, ()=> console.log(`App listening on port ${port}!`));
