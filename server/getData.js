const axios = require('axios');
const db = require('./db.js');

const getOnePokemon = async (id) => {
  let pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/' + id.toString());
  return {order: pokemon.order, name: pokemon.name, default_picture: pokemon.sprites.front_default};
}

const getSomePokemon = async () => {
  let urls = [];
  for (let i = 1; i <= 50; i++) {
    urls.push('https://pokeapi.co/api/v2/pokemon/' + i);
  }
  let results = await Promise.all(urls.map((url) => axios.get(url)))
  results = results.map(result => ({order: result.data.id, name: result.data.name, default_picture: result.data.sprites.front_default}));
  return results;
}


// // // exectues callback fn on newly generated pokemon {}
// // const getOnePokemon = (id) => {
// //   return axios.get('https://pokeapi.co/api/v2/pokemon/' + id.toString())
// // }

// // use axios the send GET requests to PokeAPI to get all pokemon data
// const getAllPokemon = () => {

//   let urls = [];
//   for (let i = 1; i <= 898; i++) {
//     urls.push('https://pokeapi.co/api/v2/pokemon/' + i);
//   }
//   return Promise.all(urls.map((url) => axios.get(url)))
// };


// // export this async function
// exports.createDB = createDB;
module.exports.getOnePokemon = getOnePokemon;
module.exports.getSomePokemon = getSomePokemon;
// module.exports.getEngDescription = getEngDescription;
