import React from 'react';
import Selection from './Selection.jsx';

const selections = require('./selections.js');

const Selections = (props) => {

  console.log('selected:', props.selected);

  var i = -1;

  return (
    <div className="selections-section">
      <h2> Selections </h2>
      {selections.filters.map(entry => {
        i += 1;
        return (<Selection key={i} selection={props.selected[i]}/>)
      }
      )}
    </div>
  )
}

export default Selections;