import React, { Component } from 'react';
import RecoTable from './RecoTable';

class Reco extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {},
      reco: []
    }
  }

  fetchReco(compTerit, specialite, domaine) {
    let self = this;
    fetch(`https://v86y9ouqxb.execute-api.eu-west-1.amazonaws.com/dev/reco?compTerit=${encodeURIComponent(compTerit)}&specialite=${encodeURIComponent(specialite)}&domaine=${encodeURIComponent(domaine)}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        self.setState({ reco: res });
      });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ filters: nextProps.filters });
    if (nextProps.filters.compTerit && nextProps.filters.specialite && nextProps.filters.domaine) this.fetchReco(nextProps.filters.compTerit, nextProps.filters.specialite, nextProps.filters.domaine);
  }

  render() {
    return (
      <div className="Reco">
        <RecoTable reco={this.state.reco} />
      </div>
    );
  }
}

export default Reco;
