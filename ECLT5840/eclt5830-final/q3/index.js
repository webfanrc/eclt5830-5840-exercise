const express = require('express');
const app = express();

const url = require("url");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'foo',
  cookie: {
    maxAge: 30*60*1000 // 30min
  }
}));

app.get('/eclt5830/q3', function(request, response) {
  let id = url.parse(request.url, true).query.sid;
  let condition = "false";
  // My CUID is 1155152557
  if (id == '152557') {
    condition = "true";
  }
  response.write(condition);
  response.end();
});

app.post('/eclt5830/q3', function(request, response) {
  let L1 = request.headers['x-5830']; //小写！

  let L2 = request.cookies.c2;

  let L3 = Number(request.body.foo) + Number(request.body['b%3Dr']);

  response.write(L1 + '\n' + L2 + '\n' + L3);

  response.end();
});

app.get('/abc/*', function(request, response) {
 let S = request.session;

  response.write(JSON.stringify(S));
  response.end();
});

app.get('/q3q', function(request, response) {
  let query = url.parse(request.url, true).query;
  let value1 = query.value1;
  let value2 = query.value2;
  let value3 = query.value3;

  response.write(checkType(value1) + ', ' + checkType(value2) + ', ' +checkType(value3));
  response.end();
});

function checkType(ele) {
  // can not distinguish null and ''
  if (ele === '') {
    return 'null';
  } else {
    return typeof ele;
  }
}


// You should not need to modify the following three statements.
app.get('/favicon.ico', (req, res) => { res.status(204).end(); });
app.use(express.static('public'));
app.listen(8080);
