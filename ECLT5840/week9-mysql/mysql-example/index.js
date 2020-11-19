// Sample code to demonstrating how to
// call "helper" function to interact with DB
// and how to close the DB connection when the server 
// shut down (when user clicks CTRL-C)

const express = require('express');
const app = express();
const db = require('./js/db');

const model = require('./js/model');

app.get('/getUser', async function(req, res) {
  let user_id = 1;  
  try {
    let user = await model.getUser(user_id);
    res.json(user);

  } catch (err) {
    console.error(err);
    res.status(500).send('Operation failed');
  }
});

let server = app.listen(8080);


// Note: Code originally obtained from
//   Graceful shutdown in NodeJS
//   https://hackernoon.com/graceful-shutdown-in-nodejs-2f8f59d1c357

// When CTRL-C signal received
process.on('SIGINT', () => {
  console.log('Closing http server.');
  server.close(() => {
    console.log('Http server closed.');
    db.end().then(()=> console.log('DB connection closed'));
  });
});

// When server is terminated gracefully
process.on('SIGTERM', () => {
  console.log('Closing http server.');
  server.close(() => {
    console.log('Http server closed.');
    db.end().then(()=> console.log('DB connection closed'));
  });
});
