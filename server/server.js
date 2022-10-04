// Express Server

require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const db = require('./dbInteraction.js');
const getOnePokemon = require('./getData.js').getOnePokemon;
const getSomePokemon = require('./getData.js').getSomePokemon;
// const createDB = require('./createDB.js');

// serve static files found in dist
app.use(express.static(path.join(__dirname, '../client/dist')));

// create database
app.post('/pokemon', async (req, res) => {
  let pokemons = await getSomePokemon();
  await db.addAllPokemon(pokemons);
  res.send('done');
})

// send all pokemon to client
app.get('/pokemon', async (req, res) => {
  let result = await db.getAllPokemon();
  res.send(result);
});

// Set Port and listen
const PORT = process.env.PORT;

app.listen(PORT, (res) => {
  console.log(`Listening on port ${PORT}`);
});
