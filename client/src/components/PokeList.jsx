import React from 'react';
import PokeEntry from './PokeEntry.jsx';

const PokeList = (props) => (
  <div className="PokemonList">
    {props.pokemonList.map(pokeEntry => <PokeEntry pokemon={pokeEntry} key={pokeEntry.order}/>)}
  </div>
)

export default PokeList;
