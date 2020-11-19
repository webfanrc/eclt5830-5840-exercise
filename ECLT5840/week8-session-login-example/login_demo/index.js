// This example illustrates how to use session to record if a 
// user has successfully logged in. In particular,
// if login is successful, session.userid will be assigned the userid.
// (If the user has not yet logged in or the session has 
// expired due to inactivity after a specified period, session.userid will 
// be undefined.

let express = require('express');
let app = express();
let session = require('express-session');
let bodyParser = require('body-parser');

// All requests will participate in session.
app.use(session({
  secret:'foobar', 
  cookie:{ maxAge: 60 * 1000 }  // 60 seconds
}));

app.use(bodyParser.urlencoded({extended: false}));

app.post('/login', function(req, res) {
  let userid;

  // For demo purpose, I hardcode the authentication rule
  if (req.body.loginid == 'john' && req.body.password == '123')
    userid = 'john';

  if (userid) {
    req.session.userid = userid; 
    res.redirect('/index');
  }
  else
    res.redirect('/login.html');
});

app.get('/logout', function(req, res) {
  req.session.destroy();
  res.redirect('/index');
});

app.get('/index', function(req, res) {
  console.log(req.session.userid);
  if (req.session.userid) {  // If user has logged in
    res.send(`
      You are logging in as ${req.session.userid}!<br> 
      <a href="/logout">Logout</a>
    `);
  }
  else { 
    res.send(`Please login <a href="/login.html">here</a>.`);
  }
});

app.use(express.static('public'));

app.listen(8080);

