const express = require('express');
const app = express();
const db = require('./js/db');

const User = require('./js/user');
const Item = require('./js/item');
const Redeem = require('./js/redeem');


/* 
  TODO: Add code to 
    - Enable session support (make the session to expire when the user closes 
      the browser)
    - Add middleware to parse request's body
*/


/*
  Redeem an item for the current user.

  TODO: Modify this callback function to perform the following tasks:
   1) If the user is not currently logged in, redirect the client to "/login.html" 
   2) Retrieve the user_id from the session (if the user is currently logged in)
   3) Retrieve the item_id from the request body
   4) Call Redeem.redeem(user_id, item_id) to redeem the item for the current user.
*/
app.post('/redeem', async function(req, res) {

  // These values are currently hardcoded for demo purpose
  let user_id = 1, item_id = 1;

  try {
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

  TODO: Modify this callback function to perform the following tasks:
   1) If the user is not currently logged in, redirect the client to "/login.html" 
   2) Retrieve the user_id from the session (if the user is currently logged in)
   3) Retrieve all items redeemed by the current user from the database.
      For each redeemed item, you should include the item_id, title, and price 
      of the item.

      Note: You need to figure out the SQL statement(s) to perform this task,
      and call db.query to retrieve the necessary data from the database.
*/
app.get('/list', async function(req, res) {
  let redeemed_items = []; 

  res.json(redeemed_items); 
});

/*
  Logout the current user

  TODO: Modify this callback function to logout the current user (if any),
    and redirect the client to "/login.html".

*/
app.get('/logout', function(req, res) {

  res.send(''); // place holder
});

/* 
  Login the current user

  TODO: Modify this callback function to perform the following tasks:
  1) Retrieve the username and password from the request's body
  2) Authenticate the user 
  3) Create a NEW session to remember the user if authentication succeeds.
     Otherwise, destroy the current session.
*/
app.post('/login', async function(req, res) {
  try {
    // In this sample code, the username and password are hardcoded.
    // Note: Password of 'user1' is 'pass1' (hardcoded in 'js/init/init.sql')

    let result = await User.authenticate('user1', 'pass1');
  
    if (result != null) {
      res.send("Authentication succeeded: " + JSON.stringify(result));  // result is a user object
    }
    else {
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
