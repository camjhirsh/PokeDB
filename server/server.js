// Express Server

require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
// const createDB = require('./createDB.js');

// serve static files found in dist
app.use(express.static(path.join(__dirname, '../client/dist')));

// populate DB and send all necessary info to client
app.get('/pokemon', (req, res) => {
  console.log('made it');
  // let result = await createDB();
  // res.send(result);
  res.send('Hello');
});

// Set Port and listen
const PORT = process.env.PORT;

app.listen(PORT, (res) => {
  console.log(`Listening on port ${PORT}`);
});
