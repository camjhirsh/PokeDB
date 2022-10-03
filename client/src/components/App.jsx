import React from 'react';
import FilterPane from './FilterPane.jsx';
import PokeList from './PokeList.jsx';
import Search from './Search.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basePokemon: [],
      pokemon: [],
      filterVal: ''
    }
  }

  componentDidMount () {
    this.getAllPokemon()
    .then((results) => {
      let allPokemon = [];
      for (let result of results) {
        let pokemon = {};
        pokemon.order = result.data.id;
        pokemon.name = result.data.name;
        pokemon.defaultPicture = result.data.sprites.front_default;
        pokemon.types = result.data.types.map(type => type.type.name);
        allPokemon.push(pokemon);
      }
      this.setState( {basePokemon: allPokemon, pokemon: allPokemon} )
    })
  }

  getAllPokemon () {
    let urls = [];
    for (let i = 1; i <= 898; i++) {
      urls.push('https://pokeapi.co/api/v2/pokemon/' + i);
    }
    return Promise.all(urls.map((url) => axios.get(url)));
  }

  search () {
    console.log(this.state.filterVal);
    this.setState({ pokemon: this.state.basePokemon.filter(pokemon => pokemon.types.includes(this.state.filterVal))})
  }

  updateFilterValue (filterName, newVal) {
    this.setState({ filterVal: newVal })
  }

  render () {
    return (
    <div class="wrapper">
      <h1 class="title"> Search Pokemon! </h1>
      <FilterPane updateFilterValue = {this.updateFilterValue.bind(this)}/>
      <Search search = {this.search.bind(this)}/>
      <PokeList pokemonList = {this.state.pokemon}/>
    </div>
    )
  }
}

export default App;
