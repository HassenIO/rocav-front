import React, { Component } from 'react';
import Filters from './Filters';
import Reco from './Reco';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compTerit: '',
      specialite: '',
      domaine: ''
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(name, value) {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="App">
        <Filters onFilterChange={this.handleFilterChange} />
        <Reco filters={this.state} />
      </div>
    );
  }
}

export default App;
