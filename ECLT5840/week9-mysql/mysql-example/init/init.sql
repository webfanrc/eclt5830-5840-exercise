CREATE DATABASE IF NOT EXISTS eclt5830 CHARACTER SET utf8mb4 collate utf8mb4_general_ci;

USE eclt5830;

DROP TABLE IF EXISTS likes, users, items;

CREATE TABLE users (
  user_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(40) NOT NULL,
  last_name VARCHAR(40) NOT NULL,
  email VARCHAR(60) NOT NULL UNIQUE,
  pass CHAR(40) NOT NULL,
  reg_date DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id)
) ENGINE=InnoDB;

CREATE TABLE items (
  item_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(128) NOT NULL,
  description VARCHAR(2048) NOT NULL DEFAULT '',
  price DECIMAL(10,2) NOT NULL DEFAULT 0,
  imgUrl VARCHAR(256),
  createdOn DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (item_id)
) ENGINE=InnoDB;

CREATE TABLE likes (
  user_id INT UNSIGNED NOT NULL,
  item_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (user_id, item_id),
  CONSTRAINT FOREIGN KEY (user_id) REFERENCES users(user_id),
  CONSTRAINT FOREIGN KEY (item_id) REFERENCES items(item_id)
) ENGINE=InnoDB;

INSERT INTO users (first_name, last_name, email, pass, reg_date)
VALUES
('John', 'Doe', 'john@xyz.com', SHA1('pw1'), '2010-2-1 18:00:30'),
('Jane', 'Dow', 'jane@abc.org', SHA1('pw2'), '2010-2-1 18:01:00'),
('Foo', 'Bar', 'foo@bar.com', SHA1('baz'), '2010-2-1 18:02:00'),
('Jack', 'Finley', 'jfinley@abc.org', SHA1('pw3'), '2010-2-2'),
('Jim', 'Doe', 'jimdoe@abc.org', SHA1('pw4'), '2010-2-2 12:00:00'),
('Eric', 'Dow', 'edow@abc.org', SHA1('pw5'), '2010-2-3'),
('Erica', 'White', 'ewhite@foo.org', SHA1('pw6'), '2010-2-3'),
('David', 'Black', 'dblack@xyz.com', SHA1('pw7'), NOW()),
('Don', 'Brown', 'dbrown@xyz.com', SHA1('pw8'), NOW()),
('Fu', 'Bar', 'fbar@xyz.com', SHA1('pw9'), NOW());
