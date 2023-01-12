import React, { useState } from 'react';
import Select from 'react-select'

const selections = require('./selections.js');

const Filter = (props) => {

  const [options, setOptions] = useState(props.filter.options);

  const handleSelect = (e) => {

    // send selection to the Selection Component
    props.handleFilterSelect(selections.indexMap[props.filter.filterName], e[0].value);

    // remove selection from the available choices
    var val = e[0].value;
    var newOptions = options;
    for (var i = 0; i < newOptions.length; i++) {
      if (newOptions[i].value = val) {
        newOptions.splice(i, 1);
        break;
      }
    }

    // re-render selector blank without the selected option
    setOptions(newOptions)
  }

  return (
    <div className="filter-entry">
      {props.filter.filterName}
      <Select
        options={options}
        onChange={
          (e) => {
            props.handleFilterSelect(selections.indexMap[props.filter.filterName], e[0].value);
          }
        }
        isMulti={true}
        closeMenuOnSelect={false}
      />
    </div>
  )
};

export default Filter;