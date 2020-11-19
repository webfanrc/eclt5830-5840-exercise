init.sql - Contains SQL commands to
1) Recreate the database 'eclt5830'
2) Recreate three tables: users, items, likes
3) Populate the "users" table 

likes.sql - Contains SQL command to populate the "likes" table

mock_data.json - Item data in JSON format
The data is created using the mockaroo's schema: https://mockaroo.com/8898d4a0

init.js - Perform the following tasks:
1) Execute the SQL commands in init.sql 
2) Populate the "items" table by inserting the item objects (from mock_data.json) 
3) Execute the SQL command in likes.sql 
(Can be executed as "node init.js")


