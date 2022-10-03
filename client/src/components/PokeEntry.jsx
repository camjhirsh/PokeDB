import React from 'react';

const PokeEntry = (props) => (
  <div class="PokemonRow">
    <span class="Index"> {props.pokemon.order} </span>
    <img class="PokeImage" src={props.pokemon.defaultPicture} alt="alt"></img>
    <span class="PokeName">{props.pokemon.name}</span>
    {props.pokemon.types.map(type => <span class="PokeTypes"> {type} </span>)}
  </div>
)

export default PokeEntry;
