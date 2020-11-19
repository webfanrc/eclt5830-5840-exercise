let mysql = require('promise-mysql');

// Note: No Database is specified in this config because
// the database will be recreated from the SQL commands in 'init.sql'
let config = {
  host: 'localhost',
  user: 'root',
  password: 'rootroot',
  multipleStatements: true
};

async function main() {

  // Read all the SQL commands from a file.
  const fs = require('fs');
  const sql_commands = fs.readFileSync('init.sql', 'utf8');

  const conn = await mysql.createConnection(config);

  await conn.query(sql_commands);

  // Insert items one by one
  const mock_data = fs.readFileSync('mock_data.json', 'utf8');
  const items = JSON.parse(mock_data);

  for (let i = 0; i < items.length; i++) {
    let item = items[i];

    await conn.query(
      `INSERT INTO items (
         item_id, title, price, imgUrl, description, createdOn)
       VALUES (?, ?, ?, ?, ?, ?)`,
       [ item.id, item.title, item.price, item.imgUrl, item.desc, item.createdOn ]
    );
  }

  const likes_sql_commands = fs.readFileSync('likes.sql', 'utf8');
  await conn.query(likes_sql_commands);

  conn.end();
}

main()
.then(()=>{
  console.log("Database initialized and populated successfully."); }
)
.catch(err => {
  console.error(err);
  conn.end();
});
