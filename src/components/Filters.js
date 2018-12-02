import React, { Component } from 'react';
import FilterInput from './FilterInput';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {},
    };
  }

  getFilterInputValues(inputLabel) {
    return this.state.inputs.inputsFilter
      ? this.state.inputs.inputsFilter[inputLabel]
      : [];
  }

  componentDidMount() {
    fetch('https://v86y9ouqxb.execute-api.eu-west-1.amazonaws.com/dev/inputs')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            inputs: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          console.log(error);
        },
      );
  }

  render() {
    return (
      <div className="Filters">
        <FilterInput
          values={this.getFilterInputValues('compTerit')}
          name="compTerit"
          onFilterChange={this.props.onFilterChange}
        />
        <FilterInput
          values={this.getFilterInputValues('specialite')}
          name="specialite"
          onFilterChange={this.props.onFilterChange}
        />
        <FilterInput
          values={this.getFilterInputValues('domaine')}
          name="domaine"
          onFilterChange={this.props.onFilterChange}
        />
      </div>
    );
  }
}

export default Filters;
