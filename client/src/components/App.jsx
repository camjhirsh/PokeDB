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
      filterVal: ''
    }
  }

  componentDidMount () {
    axios.post('/database')
    .then(() => {
      axios.get('/pokemon')
      .then((response) => {
        this.setState({ pokemon: response.data });
      })
    })
  }

  search () {
    axios.get('/pokemon')
    .then((response) => {
      this.setState({ pokemon: response.data.filter(pokemon => pokemon.types.includes(this.state.filterVal))});
    })
    .catch((err) => {
      console.log(err);
    })
  }

  updateFilterValue (filterName, newVal) {
    this.setState({ filterVal: newVal })
  }

  render () {
    return (
    <div className="wrapper">
      <h1 className="title"> Search Pokemon! </h1>
      <FilterPane updateFilterValue = {this.updateFilterValue.bind(this)}/>
      <Search search = {this.search.bind(this)}/>
      <PokeList pokemonList = {this.state.pokemon}/>
    </div>
    )
  }
}

export default App;