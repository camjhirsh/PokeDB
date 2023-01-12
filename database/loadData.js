// Script to populate DB, run once before launching app

require('dotenv').config();
const db = require('./models.js');
const data = require('../extract.js');

const populateDatabse = async () => {

  console.log('Starting Process');

  // hms table
  console.log('awaiting adding hms to db');
  await db.addHms();

  // types table
  console.log('awaiting getting types');
  let types = await data.getTypes();

  console.log('awaiting adding types to db');
  await db.addTypes(types);

  // game versions table
  console.log('awaiting getting game versions');
  let games = await data.getGameVersions();

  console.log('awaiting adding games to db');
  await db.addGames(games);

  // game generations table
  console.log('awaiting getting game generations');
  let generations = await data.getGameGenerations();

  console.log('awaiting adding generations to db');
  await db.addGames(generations);

  // pokemon table
  console.log('awaiting getting pokemon');
  let pokemons = await data.getSomePokemon();

  console.log('awaiting adding pokemon to db');
  await db.addAllPokemon(pokemons);

  // pokemon + types
  console.log('awaiting saving types + pokemon to db');
  await data.saveTypesAndPokemon();

  // pokemon + versions
  console.log('awaiting saving games + pokemon to db');
  await data.saveGamesAndPokemon();

  // pokemon + hms
  console.log('awaiting saving hms + pokemon to db');
  await data.saveHmsAndPokemon();

  // versions + generations
  console.log('awaiting saving hms + generations to db');
  await data.saveHmsAndGenerations();


  console.log('Database Populated Successfullly!');
  exit();
}

populateDatabse();
