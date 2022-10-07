// Express Server

require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();

const db = require('./dbInteraction.js');
const data = require('./getData.js');

const getSomePokemon = require('./getData.js').getSomePokemon;
const saveTypesAndPokemon = require('./getData.js').saveTypesAndPokemon;


// serve static files found in dist
app.use(express.static(path.join(__dirname, '../client/dist')));

// Hit API & populate database
app.post('/database', async (req, res) => {
  await db.eraseTables();
  let types = await data.getTypes();
  await db.addTypes(types);
  let pokemons = await data.getSomePokemon();
  await db.addAllPokemon(pokemons);
  await data.saveTypesAndPokemon();
  res.send('done');
})

// send all pokemon and types to client
app.get('/pokemon', async (req, res) => {
  let pokemon = await db.getAllPokemon(50);
  res.send(pokemon);
});

// Set Port and listen
const PORT = process.env.PORT;

app.listen(PORT, (res) => {
  console.log(`Listening on port ${PORT}`);
});
