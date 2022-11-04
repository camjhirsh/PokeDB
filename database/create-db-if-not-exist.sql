CREATE DATABASE IF NOT EXISTS pokemondb;
USE pokemonDB;

CREATE TABLE pokemon (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `order` INTEGER,
  `name` TEXT,
  `default_picture` TEXT
);

CREATE TABLE types (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `name` TEXT
);

CREATE TABLE pokemon_and_types (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `pokemon_id` INTEGER,
  `type_id` INTEGER,
  FOREIGN KEY (pokemon_id) REFERENCES pokemon(id),
  FOREIGN KEY (type_id) REFERENCES types(id)
);

SET FOREIGN_KEY_CHECKS = 0;

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/