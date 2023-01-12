DROP DATABASE IF EXISTS pokemondb;
CREATE DATABASE pokemondb;
USE pokemonDB;

CREATE TABLE pokemon (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `order` INTEGER,
  `name` TEXT,
  `front_default` TEXT,
  'front_shiny' TEXT,
  'total' INTEGER,
  'hp' INTEGER,
  'attack' INTEGER,
  'defense' INTEGER,
  'sp_attack' INTEGER,
  'sp_defense' INTEGER,
  'speed' INTEGER
);

CREATE TABLE types (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `name` TEXT
);

CREATE TABLE hms (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `name` TEXT
);

CREATE TABLE game_versions (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `name` TEXT
);

CREATE TABLE game_generations (
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

CREATE TABLE pokemon_and_hms (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `pokemon_id` INTEGER,
  `hm_id` INTEGER,
  FOREIGN KEY (pokemon_id) REFERENCES pokemon(id),
  FOREIGN KEY (hm_id) REFERENCES hms(id)
);

CREATE TABLE pokemon_and_game_versions (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `pokemon_id` INTEGER,
  `game_id` INTEGER,
  FOREIGN KEY (pokemon_id) REFERENCES pokemon(id),
  FOREIGN KEY (game_id) REFERENCES games(id)
);

CREATE TABLE hms_and_game_generations (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `pokemon_id` INTEGER,
  `game_id` INTEGER,
  FOREIGN KEY (pokemon_id) REFERENCES pokemon(id),
  FOREIGN KEY (game_id) REFERENCES games(id)
);

SET FOREIGN_KEY_CHECKS = 0;

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/