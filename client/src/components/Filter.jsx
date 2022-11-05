import React from 'react';
import Select from 'react-select'

const selections = require('./selections.js');

const Filter = (props) => {
  return (
    <div className="filter-section">
      {props.filter.filterName}
      <Select
        options={props.filter.options}
        onChange={(e) => props.handleFilterSelect(selections.indexMap[props.filter.filterName], e.value)}/>
    </div>
  )
};

export default Filter;