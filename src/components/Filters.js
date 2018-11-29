import React, { Component } from 'react';
import FilterInput from './FilterInput';
import FilterButton from './FilterButton';

class Filters extends Component {
  render() {
    return (
      <div className="Filters">
        <FilterInput />
        <FilterInput />
        <FilterInput />
        <FilterButton />
      </div>
    );
  }
}

export default Filters;
