require('dotenv').config();
const db = require('./models.js');
const data = require('./extract.js');

const test = async () => {
  data.getGames();
}

test();