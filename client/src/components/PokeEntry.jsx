import React, { useState } from 'react';

const PokeEntry = (props) => {

  const [showButton, setShowButton] = useState(false);

  return (
    <div className="pokemon-entry">
      <span> <img className="poke-image" src={props.pokemon.default_picture} alt="alt"></img> </span> <br></br>
      <span> {props.pokemon.order} </span> <br></br>
      <span className="poke-name"> {props.pokemon.name} </span> <br></br>
      <span className="poke-types"> {props.pokemon.types.map(type => <p className="poke-type" key={type}> {type} </p>)} </span>
      <span className="add-to-party"> {showButton? <button className="add-to-party-btn"> add to party </button>: null} </span>
    </div>
  )
}

export default PokeEntry;
