import React, { useState } from 'react';
import Filters from './Filters.jsx';
import Selections from './Selections.jsx';
import Party from './Party.jsx';

const SelectionPane = (props) => {

  return (
    <div className="selection-pane">
      <Filters/>
      <Selections/>
      <Party/>
    </div>
  )
}

export default SelectionPane;