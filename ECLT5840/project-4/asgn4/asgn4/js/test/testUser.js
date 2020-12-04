let db = require('../db');
let User = require('../user');

async function main() {
  try {
    let user = { username: 'foobar', password: '123', token_balance: 1000 };

    let id = await User.create(user);
    console.log(`User.create(): created a user`, user);

    let userObj = await User.findById( id );
    if (userObj)
      console.log(`User.findById(): succeeded in finding a user`, userObj);

    userObj = await User.findByUsername( user.username );
    if (userObj)
      console.log(`User.findByUsername(): succeeded in finding a user`, userObj);


    let authResult1 = await User.authenticate( user.username, user.password );
    if (authResult1 != null)
      console.log(`User.authenticate(${user.username}, ${user.password}) => OK`);

    let authResult2 = await User.authenticate( user.username, 'wrong password' );
    if (authResult2 == null)
      console.log(`User.authenticate(${user.username}, 'wrong password') => Failed`);

    let authResult3 = await User.authenticate( 'Test Dummy', 'wrong password' );
    if (authResult3 == null)
      console.log(`User.authenticate('Test Dummy', 'wrong password') => Failed`);

    let affectedRow = await User.remove( id );
    if (affectedRow == 1)
      console.error(`User.remove(): Succeeded in deleting an existing user.`);

    userObj = await User.findById( id );
    if (userObj == null)
      console.log(`User.findById(): Suceeded in not finding a non-existing user.`); 

  } catch (err) {
    console.error(err);
  } finally {
    await db.end();
  }
}

main();
