import React from 'react';

const PokeEntry = (props) => (
  <div className="PokemonRow">
    <span className="Index"> {props.pokemon.order} </span>
    <img className="PokeImage" src={props.pokemon.default_picture} alt="alt"></img>
    <span className="PokeName">{props.pokemon.name}</span>
    {/* {props.pokemon.types.map(type => <span className="PokeTypes" key={type}> {type} </span>)} */}
  </div>
)

export default PokeEntry;
