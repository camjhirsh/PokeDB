import React from 'react';

const Selection = (props) => {

  console.log(props.selection);

  return (
    <div className="selection-entry">
      {props.selection}
    </div>
  )
}

export default Selection;