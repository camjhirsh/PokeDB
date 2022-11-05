import React from 'react';
import PokeEntry from './PokeEntry.jsx';

const PokeList = (props) => (
  <div className="pokemon-list">
    {props.pokemonList.map(pokeEntry => <PokeEntry pokemon={pokeEntry} key={pokeEntry.order}/>)}
  </div>
)

export default PokeList;
