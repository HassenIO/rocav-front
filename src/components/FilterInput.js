import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class FilterInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: props.values,
      value: ''
    };
    this.onOptionChange = this.onOptionChange.bind(this);
  }

  createOptions(values) {
    if (!values) return '';

    let items = [<MenuItem key="empty" value="" disabled><em>Aucun</em></MenuItem>];
    for (let value of values) {
      items.push(
        <MenuItem key={value} value={value}>
          {value}
        </MenuItem>,
      );
    }
    return items;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ values: nextProps.values });
  }

  onOptionChange(e) {
    this.props.onFilterChange(e);
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="FilterInput">
        <FormControl>
          <InputLabel htmlFor="demo-controlled-open-select">{this.props.label}</InputLabel>
          <Select value={this.state.value} inputProps={{ name: this.props.name }} onChange={this.onOptionChange}>
            {this.createOptions(this.state.values)}
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default FilterInput;
