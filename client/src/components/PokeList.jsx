import React from 'react';
import PokeEntry from './PokeEntry.jsx';

const PokeList = (props) => (
  <div class="PokemonList">
    {props.pokemonList.map(pokeEntry => <PokeEntry pokemon={pokeEntry}/>)}
  </div>
)

export default PokeList;
