import React, { Component } from 'react';
import Filters from './Filters';
import Reco from './Reco';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Filters />
        <Reco />
      </div>
    );
  }
}

export default App;
