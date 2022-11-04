// Express Server

require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();

const db = require('../database/db-interaction.js');
const data = require('./get-data.js');

var total_num_pokemon = 888;

// serve static files found in dist
app.use(express.static(path.join(__dirname, '../client/dist')));

// send pokemon and types
app.get('/pokemon', async (req, res) => {
  let pokemon = await db.getNPokemon(total_num_pokemon);
  res.send(pokemon);
});

// Set Port and listen
const PORT = process.env.PORT;

app.listen(PORT, (res) => {
  console.log(`Listening on port ${PORT}`);
});
