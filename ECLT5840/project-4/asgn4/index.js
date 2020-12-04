const express = require('express');
const app = express();
const db = require('./js/db');

const User = require('./js/user');
const Item = require('./js/item');
const Redeem = require('./js/redeem');

const bodyParser = require('body-parser');
const session = require('express-session');
const sessionSecretKey = 'sessionSecretKey';




// Enable session support (make the session to expire when the user closes the browser)
app.use(session({
  secret: sessionSecretKey
}));

// Parse request's body
app.use(bodyParser.urlencoded({ extended: true }));

/*
  Redeem an item for the current user.
*/
app.post('/redeem', async function(req, res) {

  // These values are currently hardcoded for demo purpose

  try {
    if (!req.session.username) res.redirect('/login.html');
    let userName = req.session.username;

    let user_Obj = await User.findByUsername(userName);

    let user_id = user_Obj.id;
    let item_id = req.body.item_id;


    let user = await Redeem.redeem(user_id, item_id);
    res.send(`Redeemed item (item_id=${item_id}) successfully.`);

  } catch (err) {

    res.send(`Failed to redeem item (item_id=${item_id}).`);
    console.error(err);
    res.status(500).send(`Failed to redeem item (item_id=${item_id}).`);
  }
});

/*
  List all items redeemed by the current user.
*/
app.get('/list', async function(req, res) {
  if (!req.session.username) res.redirect('/login.html');

  let userName = req.session.username;
  let user_Obj = await User.findByUsername(userName);
  let user_id = user_Obj.id;

  let sql = `
  select A.item_id, B.title, B.price
  from redeemed_items as A, items as B
  where A.user_id = ? and A.item_id=B.item_id
  `;
  let data = [user_id];

  let results = await db.query(sql, data);

  let redeemed_items = results;

  res.json(redeemed_items);

});

/*
  Logout the current user

  TODO: Modify this callback function to logout the current user (if any),
    and redirect the client to "/login.html".

*/
app.get('/logout', function(req, res) {

  req.session.destroy();

  res.redirect('/login.html');
});

/* 
  Login the current user

  1) Retrieve the username and password from the request's body
  2) Authenticate the user 
  3) Create a NEW session to remember the user if authentication succeeds.
     Otherwise, destroy the current session.
*/
app.post('/login', async function(req, res) {
  try {
    // In this sample code, the username and password are hardcoded.
    // Note: Password of 'user1' is 'pass1' (hardcoded in 'js/init/init.sql')

    console.log(req.body);

    let username = req.body.username;
    let password = req.body.password;


    console.log(username, password);


    let result = await User.authenticate(username, password);

    if (result != null) {
      req.session.username = username;
      res.send("Authentication succeeded: " + JSON.stringify(result));  // result is a user object
    }
    else {
      req.session.destroy();
      // cannot access session here
      res.send('Authentication failed');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Operation failed');
  } 
});

app.use(express.static('public'));

app.listen(8080, ()=> console.log(`Server is OK! On port 8080`));




// Note: Code originally obtained from
//   Graceful shutdown in NodeJS
//   https://hackernoon.com/graceful-shutdown-in-nodejs-2f8f59d1c357

// When CTRL-C signal received
process.on('SIGINT', () => {
  console.log('Closing http server.');

  // This version disregards all connections and shutdown ASAP
  db.end().then(()=> {
    console.log('DB connection closed'); 
    process.exit(0);
  });

  
/* 
  // This version will wait for about 2 minutes for all connections to close 
  // before shutting down 
  server.close(() => {
    console.log('Http server closed.');
    db.end().then(()=> console.log('DB connection closed'));
  });
*/
});

// When server is terminated gracefully
process.on('SIGTERM', () => {
  console.log('Closing http server.');
  server.close(() => {
    console.log('Http server closed.');
    db.end().then(()=> console.log('DB connection closed'));
  });
});
