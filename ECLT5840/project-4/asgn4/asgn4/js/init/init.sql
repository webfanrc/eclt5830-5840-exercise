DROP DATABASE IF EXISTS eclt5830_asgn4;
CREATE DATABASE eclt5830_asgn4 CHARACTER SET utf8mb4 collate utf8mb4_general_ci;

USE eclt5830_asgn4;

DROP TABLE IF EXISTS users, items, redeemed_items;

CREATE TABLE users (
  user_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  username VARCHAR(40) NOT NULL UNIQUE,
  pass CHAR(40) NOT NULL,
  token_balance INT UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id)
) ENGINE=InnoDB;

CREATE TABLE items (
  item_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(256) NOT NULL,
  price INT UNSIGNED NOT NULL DEFAULT 0,
  image_url VARCHAR(128), 
  PRIMARY KEY (item_id)
) ENGINE=InnoDB;

/*
  Record the items redeemed by the users.
*/
CREATE TABLE redeemed_items (
  redeemed_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  item_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (redeemed_id),
  CONSTRAINT FOREIGN KEY (user_id) REFERENCES users(user_id),
  CONSTRAINT FOREIGN KEY (item_id) REFERENCES items(item_id)
) ENGINE=InnoDB;


/* 
   If you do not need the following populate statements,
   Use multiline comment like this one to hide them 
*/


INSERT INTO users (user_id, username, pass, token_balance) VALUES
(1, 'user1', SHA1('pass1'), 1000),
(2, 'user2', SHA1('pass2'), 1000),
(3, 'user3', SHA1('pass3'), 0),
(4, 'user4', SHA1('pass4'), 10),
(5, 'user5', SHA1('pass5'), 100);


INSERT INTO items (item_id, title, image_url, price) VALUES
(1, 'Item 1: Apple', '1.jpg', 10),
(2, 'Item 2: Banana', '2.jpg', 20),
(3, 'Item 3: Pear', '3.jpg', 30),
(4, 'Item 4: Peach', '4.jpg', 40),
(5, 'Item 5: Orange', '5.jpg', 50),
(6, 'Item 6: Rambutan', '6.jpg', 60),
(7, 'Item 7: Plum', '7.jpg', 70),
(8, 'Item 8: Lychee', '8.jpg', 80),
(9, 'Item 9: Mango', '9.jpg', 90),
(10, 'Item 10: Kiwi Fruit', '10.jpg', 99);

/*
INSERT INTO redeemed_items (user_id, item_id) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(5, 1),
(5, 1),
(5, 1);
*/
