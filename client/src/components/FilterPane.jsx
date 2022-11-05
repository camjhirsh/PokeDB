import React, { useState } from 'react';
import Filter from './Filter.jsx'

const selections = require('./selections.js');

const FilterPane = (props) => {

  const [additional, setAdditional] = useState(false);

  const handleFilterSelect = () => {
    setAdditional(true);
    props.updateTypeFilter();
  }

  return (
    <div className="filter-section">
      {selections.filters.map(thisFilter => <Filter filter={thisFilter} key={thisFilter.filterName} handleFilterSelect={handleFilterSelect} />)}
      {additional? <div> Region: region <br></br> Games: games | games </div>: null}
    </div>
  )
}

export default FilterPane;