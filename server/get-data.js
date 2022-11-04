const axios = require('axios');
const db = require('../database/db-interaction.js');

module.exports = {

  getOnePokemon: async (id) => {
    let pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/' + id.toString());
    return {order: pokemon.order, name: pokemon.name, default_picture: pokemon.sprites.front_default};
  },

  getSomePokemon: async () => {
    let pmon = [];
    for (let i = 1; i <= 900; i++) {
      let response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + i);
      let p = { order: response.data.id, name: response.data.name, default_picture: response.data.sprites.front_default };
      pmon.push(p);
    }
    return pmon;
  },

  getTypes: async () => {
    let results = await axios.get('https://pokeapi.co/api/v2/type');
    results = results.data.results;
    return results;
  },

  saveTypesAndPokemon: async () => {
    let pmon = [];
    for (let i = 1; i <= 900; i++) {
      let response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + i);
      for (t of response.data.types) {
        let t_id = t.type.url.split('ype/')[1].split('/')[0];
        await db.addPokemonType(response.data.id, t_id);
      }
    }
  }
}