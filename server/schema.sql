DROP DATABASE IF EXISTS pokemondb;
CREATE DATABASE pokemondb;
USE pokemonDB;

CREATE TABLE pokemon (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `order` INTEGER,
  `name` TEXT,
  `default_picture` TEXT
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/