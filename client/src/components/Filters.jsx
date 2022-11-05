import React from 'react';
import Filter from './Filter.jsx';

const selections = require('./selections.js');

const Filters = (props) => {

  return (
    <div className="filters-section">
      <h2> Filters </h2>
      {selections.filters.map(thisFilter => <Filter filter={thisFilter} key={thisFilter.filterName} handleFilterSelect={props.handleFilterSelect} />)}
      <button className="sm-btn hover" onClick={props.search}>Search</button>
    </div>
  )
}

export default Filters;