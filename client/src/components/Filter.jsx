import React from 'react';
import Select from 'react-select'

const Filter = (props) => {
  return (
    <div className="filter-section">
      {props.filter.filterName}
      <Select
        options={props.filter.options}
        onChange={props.handleFilterSelect}/>
    </div>
  )
};

export default Filter;