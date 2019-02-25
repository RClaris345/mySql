DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE theProduct(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT(100) default 0,
  stock INT(10) default 0,
  PRIMARY KEY (id)
);

INSERT INTO theProduct (product_name, department_name, price, stock)
VALUES ("IPad", "Electronics", 80, 10);

INSERT INTO theProduct (product_name, department_name, price, stock)
VALUES ("Hydrofalsks", "Water Bottles", 20, 100);

INSERT INTO theProduct (product_name, department_name, price, stock)
VALUES ("Cookies","Deset",50,100);

INSERT INTO theProduct (product_name, department_name, price, stock)
VALUES ("TV", "Electronics", 10, 5);

INSERT INTO theProduct (product_name, department_name, price, stock)
VALUES ("Your Mom", "My House", 10, 1);

INSERT INTO theProduct (product_name, department_name, price, stock)
VALUES ("Weed","Your Boys", 128 ,18);

INSERT INTO theProduct (product_name, department_name, price, stock)
VALUES ("Hennysey","Alcohol", 10 ,20);

SELECT * FROM bamazon_DB.theProduct;
