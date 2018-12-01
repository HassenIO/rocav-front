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
    }
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(e) {
    console.log(`${e.target.name} changed to ${e.target.value}`);
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <Filters onFilterChange={this.handleFilterChange} />
        <Reco />
      </div>
    );
  }
}

export default App;
