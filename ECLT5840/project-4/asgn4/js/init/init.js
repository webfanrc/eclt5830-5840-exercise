let mysql = require('promise-mysql');
const dbConfig = require('../../config/mysql');

// Note: No Database is specified in this config because
// the database is to be recreated from the SQL commands in 'init.sql'
const dbOptions = {
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  multipleStatements: true
};

async function main() {
 
  let conn;
  try {
    conn = await mysql.createConnection(dbOptions);

    // Read all the SQL commands from a file and execute them
    const fs = require('fs');
    const sqlCommands = fs.readFileSync(__dirname + '/init.sql', 'utf8');
    await conn.query(sqlCommands);

    console.log("Database initialized and populated successfully."); 
 
  } catch (err) {
    console.error(err);

  } finally {
    if (conn) {
      await conn.end();
    }
  }
}

main();
