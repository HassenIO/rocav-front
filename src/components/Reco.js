import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Reco extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {},
      reco: [],
    };
  }

  fetchReco(compTerit, specialite, domaine) {
    let self = this;
    fetch(
      `https://v86y9ouqxb.execute-api.eu-west-1.amazonaws.com/dev/reco?compTerit=${encodeURIComponent(
        compTerit,
      )}&specialite=${encodeURIComponent(
        specialite,
      )}&domaine=${encodeURIComponent(domaine)}`,
    )
      .then(res => res.json())
      .then(res => {
        console.log(res);
        self.setState({ reco: res });
      });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ filters: nextProps.filters });
    if (
      nextProps.filters.compTerit &&
      nextProps.filters.specialite &&
      nextProps.filters.domaine
    )
      this.fetchReco(
        nextProps.filters.compTerit,
        nextProps.filters.specialite,
        nextProps.filters.domaine,
      );
  }

  render() {
    const columns = [
      {
        Header: 'Avocat',
        accessor: 'AvocatId',
      },
      {
        Header: 'Critères',
        accessor: 'Critères',
      },
      {
        Header: `Nb Missions ${this.state.filters.domaine || ''}`,
        accessor: `nb_missions_${this.state.filters.domaine}`,
      },
    ];

    return (
      <div className="Reco">
        <ReactTable columns={columns} data={this.state.reco} />
      </div>
    );
  }
}

export default Reco;
