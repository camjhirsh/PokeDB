// Express Server

require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const db = require('./dbInteraction.js');
// const createDB = require('./createDB.js');

// serve static files found in dist
app.use(express.static(path.join(__dirname, '../client/dist')));

// populate DB and send all necessary info to client
app.get('/pokemon', (req, res) => {
  db.insertPokemon();
  db.getAllPokemon(result => console.log(result));
  res.send('ok');
});

// Set Port and listen
const PORT = process.env.PORT;

app.listen(PORT, (res) => {
  console.log(`Listening on port ${PORT}`);
});
