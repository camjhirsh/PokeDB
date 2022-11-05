import React from 'react';

const PokeEntry = (props) => (
  <div className="pokemon-entry">
    <span> <img className="poke-image" src={props.pokemon.default_picture} alt="alt"></img> </span> <br></br>
    <span> {props.pokemon.order} </span> <br></br>
    <span className="poke-name"> {props.pokemon.name} </span> <br></br>
    <span className="poke-types"> {props.pokemon.types.map(type => <p className="poke-type" key={type}> {type} </p>)} </span>
  </div>
)

export default PokeEntry;
