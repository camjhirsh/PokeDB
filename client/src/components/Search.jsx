import React from 'react'

const Search = (props) => (
  <div className="search-section">
    <button className="search-btn hover" onClick={props.search}>Search</button>
  </div>
)

export default Search;
