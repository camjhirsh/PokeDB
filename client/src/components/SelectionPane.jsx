import React from 'react';
import Filters from './Filters.jsx';
import Selections from './Selections.jsx';
import Party from './Party.jsx';

class SelectionPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleFilterSelect (filterIndex, value) {
    console.log('index, val:', filterIndex, value)
    if (this.state.hasOwnProperty(filterIndex)) {
      this.setState({ [filterIndex]: this.state[filterIndex].concat([value]) })
    } else {
      console.log('var:', filterIndex)
      this.setState({ [filterIndex]: [value] })
    }
  }

  render () {
    return (
      <div className="selection-pane">
        <Filters handleFilterSelect={this.handleFilterSelect.bind(this)}/>
        <Party/>
      </div>
    )
  }
}

export default SelectionPane;