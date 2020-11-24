let express = require('express');
let app = express();

const avails = [1,3,5,7,9,20,22,24,26,28,30];


app.get('/favicon.ico', (req, res) => { res.status(204).end(); });


app.listen(8081);
