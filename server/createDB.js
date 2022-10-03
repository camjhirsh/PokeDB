const axios = require('axios');
const db = require('./db.js');

const createDB = async () => {
  console.log('here');
  await db.queryAsync(
    `INSERT INTO pokemon (order, name) VALUES
    (1, "charizard")`
  );
  return 'Database Created';
}


// // exectues callback fn on newly generated pokemon {}
// const getOnePokemon = (id) => {
//   return axios.get('https://pokeapi.co/api/v2/pokemon/' + id.toString())
// }

// use axios the send GET requests to PokeAPI to get all pokemon data
const getAllPokemon = () => {

  let urls = [];
  for (let i = 1; i <= 898; i++) {
    urls.push('https://pokeapi.co/api/v2/pokemon/' + i);
  }
  return Promise.all(urls.map((url) => axios.get(url)))
};


// export this async function
exports.createDB = createDB;
// module.exports.getOnePokemon = getOnePokemon;
// module.exports.getAllPokemon = getAllPokemon;
// module.exports.getEngDescription = getEngDescription;
