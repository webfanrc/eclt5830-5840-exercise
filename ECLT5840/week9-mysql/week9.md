# instruction

For additional info about the database, please refer to the instructions in mysql-example.

# Q1

Please specify an SQL statement to add items to the “items” table.

## Answer
```
insert into items
(title, description, price, createdOn)
values
("Sample 1", "Sample data 1", 200.0, "2020-01-31 06:30:00"),
("Sample 2", "Sample data '2'", 100.0, "2020-01-31 18:00:00")


```
When using 'Sample data '2'' directly, it will call ERROR1064(42000)

# Q2

Please specify an SQL statement to retrieve “item_id”, “title”, and “price” of all the items priced between $10 and $20.


```
select item_id, title, price
from items
where price>=10 and price<=20

```

# Q3
Please specify an SQL statement to retrieve “item_id”, “title”, and “price” of the 20 priciest items.

```
select item_id, title, price
from items
order by price desc
limit 20

```

# Q4

Please specify an SQL statement to change the last name of “Eric Dow” from “Dow” to “Wall”.

```
update users
set last_name="Wall"
where user_id=6
```

# Q5

Please specify an SQL statement to retrieve “item_id” and “title” of all the items liked by the user with user_id=1.

```
select items.item_id, items.title
from items, likes
where likes.user_id = 1 and items.item_id = likes.item_id
```

```
select items.item_id, items.title
from items JOIN likes
on items.item_id = likes.item_id
where likes.user_id = 1

```

# Q6
Please specify one or more SQL statements to remove user with user_id=2 (from table “users”) and all the like’s made by this user (from table “likes”).


* order is important

```

delete from likes
where user_id=2


delete from users
where user_id=2

```