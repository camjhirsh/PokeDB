import React from 'react';
import Filter from './Filter.jsx';

const selections = require('./selections.js');

const Filters = (props) => {

  const handleFilterSelect = () => {
    console.log('eeek');
  }

  return (
    <div className="filters-section">
      <h2> Filters </h2>
      {selections.filters.map(thisFilter => <Filter filter={thisFilter} key={thisFilter.filterName} handleFilterSelect={handleFilterSelect} />)}
    </div>
  )
}

export default Filters;