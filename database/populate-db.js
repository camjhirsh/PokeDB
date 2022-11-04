// Script to populate DB, run once before launching app

require('dotenv').config();
const db = require('./db-interaction.js');
const data = require('../server/get-data.js');

const populateDatabse = async () => {
  console.log('Starting Process');
  console.log('awaiting getting types');
  let types = await data.getTypes();
  console.log('awaiting adding types to db');
  await db.addTypes(types);
  console.log('awaiting getting pokemon');
  let pokemons = await data.getSomePokemon();
  console.log('awaiting adding pokemon to db');
  await db.addAllPokemon(pokemons);
  console.log('awaiting saving types + pokemon to db');
  await data.saveTypesAndPokemon();
  console.log('Database Populated Successfullly!');
  exit();
}

populateDatabse();
