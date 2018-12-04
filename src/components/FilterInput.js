import React, { PureComponent } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import './FilterInput.css';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 200,
  },
});

class FilterInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      values: props.values,
      value: '',
    };
    this.onOptionChange = this.onOptionChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ values: nextProps.values });
  }

  onOptionChange(e) {
    this.props.onFilterChange(e.target.name, e.target.value);
    this.setState({ value: e.target.value });
  }

  render() {
    const { values } = this.state;
    return (
      <div className="FilterInput">
        <FormControl className="formControl">
          <InputLabel htmlFor={this.props.name}>{this.props.label}</InputLabel>
          <Select
            style={{ width: '200px' }}
            value={this.state.value}
            inputProps={{ name: this.props.name, id: this.props.name }}
            onChange={this.onOptionChange}
            autoWidth={true}>
            <MenuItem key="empty" value="" disabled>
              <em>Aucun</em>
            </MenuItem>
            {values.map((value, key) => {
              return (
                <MenuItem key={key} value={value}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(FilterInput);
