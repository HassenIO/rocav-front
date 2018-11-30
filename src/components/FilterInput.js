import React, { Component } from 'react';

class FilterInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: props.values,
    };
  }

  createOptions(values) {
    if (!values) return '';

    let items = [];
    for (let value of values) {
      items.push(
        <option key={value} value={value}>
          {value}
        </option>,
      );
    }
    return items;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ values: nextProps.values });
  }

  render() {
    return (
      <div className="FilterInput">
        <select>{this.createOptions(this.state.values)}</select>
      </div>
    );
  }
}

export default FilterInput;
