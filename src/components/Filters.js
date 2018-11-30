import React, { Component } from 'react';
import FilterInput from './FilterInput';
import FilterButton from './FilterButton';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {},
    };
  }

  componentDidMount() {
    fetch('https://v86y9ouqxb.execute-api.eu-west-1.amazonaws.com/dev/inputs')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            inputs: result
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
        <FilterInput values={this.state.inputs.inputsFilter ? this.state.inputs.inputsFilter.compTerit : []} />
        <FilterInput values={this.state.inputs.inputsFilter ? this.state.inputs.inputsFilter.specialite : []} />
        <FilterInput values={this.state.inputs.inputsFilter ? this.state.inputs.inputsFilter.domaine : []} />
        <FilterButton />
      </div>
    );
  }
}

export default Filters;
