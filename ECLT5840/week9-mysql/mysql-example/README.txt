首先安装好mysql，并且设置用户名为root，密码为rootroot。

去init文件夹中node init.js，来安装database并且注入数据。




下面是老师的备注：

----------

1) Run "npm install" to install all the necessary modules.

Note: The current configuration assumes the database user is "root" and 
its password is "". This is the default setting for the database admin user in XAMPP.
You can change the database configuration in "js/db.js".

2) Make sure MySql (or MariaDB) server is running.

3) To create database "eclt5830" with sample data:
Go to folder "init", and run "node init". 

At this point you can play with SQL in the browser through phpMyAdmin.
-----------------------------------------------------------------------------


The sample code for performing CRUD operations on the "users" table
is in "js/model.js".

The code in "index.js" only illustrates how to 
1) Invoke an async function (exported from "js/model.js") that interacts with DB.
2) To close DB connection when the server is terminated.

