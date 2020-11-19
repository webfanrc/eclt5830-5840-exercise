const conn = require('./db');
const model = require('./model');

(async function() {
try {

  console.log("==============");
  console.log("Test getUser()");
  console.log("==============");
  let user1 = await model.getUser(1);
  let user2 = await model.getUser(1111); // None existance user

  console.log(user1); // user object
  console.log(user2); // null

  console.log("==========================================");
  console.log("Test updateUser(): change user's last_name");
  console.log("==========================================");

  user1.last_name = '*changed*';
  await model.updateUser(user1);

  // Re-acquire user data from DB to see the changes
  let user1a = await model.getUser(1);
  console.log(user1a);


  let user3_user_id;
  let user3 = await model.getUserByEmail('steve_jackson@example.com');
  if (! user3) { // If not exists
    console.log("==============");
    console.log("Test addUser()");
    console.log("==============");

    user3 = { last_name: 'Jackson', first_name: 'Steve',
              email: 'steve_jackson@example.com',
              pass: '123456'};

    user3_user_id = await model.addUser(user3);

    // Obtain the full user records (including the createdOn property)
    user3 = await model.getUser(user3_user_id);
    console.log(user3);
  }
  else {  // If the user record already exist, simply get his/her user_id
    user3_user_id = user3.user_id;
  }

  console.log("=================");
  console.log("Test deleteUser()");
  console.log("=================");
  await model.deleteUser(user3_user_id);
  user3 = await model.getUser(user3_user_id);
  if (user3 == null)
    console.log(`User (user_id=${user3_user_id}) deleted`);
  else
    console.log('Something wrong with deleteUser()');


  console.log("===================");
  console.log("Test authenticate()");
  console.log("===================");

  // Note: authenticate() returns a user object (without the password)
  // if email matches the password. Otherwise it returns null.
  let user, 
      user1_password = 'pw1'; // (initialized by the SQL in init.sql)

  user = await model.authenticate(user1.email, user1_password);
  console.log(user != null);  // true
  console.log(user);
  user = await model.authenticate(user1.email, '1234');
  console.log(user != null); // false
  user = await model.authenticate('wrong@example.com', user1.pass);
  console.log(user != null); // false

} catch (err) {
  console.error(err);
} finally {
  conn.end();
}

})();
