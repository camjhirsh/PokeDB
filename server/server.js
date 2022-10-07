// Express Server

require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();

const db = require('./dbInteraction.js');

const getTypes = require('./getData.js').getTypes;
const getSomePokemon = require('./getData.js').getSomePokemon;
const saveTypesAndPokemon = require('./getData.js').saveTypesAndPokemon;


// serve static files found in dist
app.use(express.static(path.join(__dirname, '../client/dist')));

// populate database
app.post('/database', async (req, res) => {
  await db.eraseTables();
  let types = await getTypes();
  await db.addTypes(types);
  let pokemons = await getSomePokemon();
  await db.addAllPokemon(pokemons);
  await saveTypesAndPokemon();
  res.send('done');
})

// send all pokemon and their types to client
app.get('/pokemon', async (req, res) => {
  // let pokemon = await db.getAllPokemon();
  // console.log(pokemon)
  let pokemon = await db.getAllPokemon2(50);
  console.log('poke', pokemon);
  res.send(pokemon);
});

// Set Port and listen
const PORT = process.env.PORT;

app.listen(PORT, (res) => {
  console.log(`Listening on port ${PORT}`);
});
