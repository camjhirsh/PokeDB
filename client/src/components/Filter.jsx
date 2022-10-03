import React from 'react';
import Select from 'react-select'

class Filter extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange (e) {
    this.props.updateFilterValue(this.props.filter.filterName, e.value);
  }

  render () {
    return (
      <div className="filter" id={this.props.filter.filterName}>
        Which {this.props.filter.filterName} ?
        <Select options={this.props.filter.options} onChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
};

export default Filter;