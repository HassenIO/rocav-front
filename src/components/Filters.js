import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
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
        <Grid container justify="center">
          <Grid key="compTerit" item xs={4}>
            <FilterInput
              values={this.getFilterInputValues('compTerit')}
              name="compTerit"
              label="Compétance Territoriale"
              onFilterChange={this.props.onFilterChange}
            />
          </Grid>
          <Grid key="specialite" item xs={4}>
            <FilterInput
              values={this.getFilterInputValues('specialite')}
              name="specialite"
              label="Spécialité"
              onFilterChange={this.props.onFilterChange}
            />
          </Grid>
          <Grid key="domaine" item xs={4}>
            <FilterInput
              values={this.getFilterInputValues('domaine')}
              name="domaine"
              label="Domaine"
              onFilterChange={this.props.onFilterChange}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Filters;
