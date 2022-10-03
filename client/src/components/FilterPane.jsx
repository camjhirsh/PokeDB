import React from 'react';
import Filter from './Filter.jsx'

const filters = [
  {
    filterName: "Region",
    options: [
      { value: 'sinoh', label: 'sinoh'},
      { value: 'hoehn', label: 'hoehn'},
      { value: 'black', label: 'black'}
    ]
  },
  {
    filterName: "Type",
    options: [
      { value: 'grass', label: 'grass'},
      { value: 'fire', label: 'fire'},
      { value: 'water', label: 'water'},
      { value: 'electric', label: 'electric'},
      { value: 'fighting', label: 'fighting'},
      { value: 'flying', label: 'flying'},
      { value: 'ground', label: 'ground'},
      { value: 'dark', label: 'dark'},
      { value: 'poison', label: 'poison'},
      { value: 'steel', label: 'steel'},
      { value: 'rock', label: 'rock'},
      { value: 'psychic', label: 'psychic'},
      { value: 'dragon', label: 'dragon'},
      { value: 'shadow', label: 'shadow'},
      { value: 'normal', label: 'normal'},
      { value: 'ice', label: 'ice'},
      { value: 'ghost', label: 'ghost'},
      { value: 'bug', label: 'bug'},
      { value: 'fairy', label: 'fairy'},
    ]
  },
  {
    filterName: "Evolution",
    options: [
      { value: 1, label: 1},
      { value: 2, label: 2},
      { value: 3, label: 3},
      { value: 'legendary', label: 'lengendary'}
    ]
  },
  {
    filterName: "Game / Generation",
    options: [
      { value: 'Red', label: 'Red'},
      { value: 'Soul Silver', label: 'Soul Silver'},
      { value: 'Black & White', label: 'Black & White'},
      { value: 'Platinum', label: 'Platinum'}
    ]
  }
]

// Filter Pane Component
const FilterPane = (props) => (
    <div class="FilterPane">
      {filters.map(thisFilter => <Filter filter={thisFilter} updateFilterValue={props.updateFilterValue} />)}
    </div>
)

export default FilterPane;