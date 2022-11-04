import React from 'react';
import FilterPane from './FilterPane.jsx';
import PokeList from './PokeList.jsx';
import Search from './Search.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      typeFilters: []
    }
  }

  componentDidMount () {
    axios.get('/pokemon')
    .then((response) => {
      this.setState({ pokemon: response.data });
    })
    .catch(err => console.log('Error getting pokemon:', err))
  }

  search () {
    axios.get('/pokemon')
    .then((response) => {
      this.setState({ pokemon: response.data.filter(pokemon => this.state.typeFilters.every(t => pokemon.types.includes(t))) });
    })
    .catch((err) => {
      console.log(err);
    })
  }

  updateTypeFilter (types) {
    this.setState({ typeFilters: types })
  }

  render () {
    return (
    <div className="wrapper">
      <h1 className="title"> Search Pokemon! </h1>
      <FilterPane updateTypeFilter = {this.updateTypeFilter.bind(this)}/>
      <Search search = {this.search.bind(this)}/>
      <PokeList pokemonList = {this.state.pokemon}/>
    </div>
    )
  }
}

export default App;