import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './Reco.css';

class Reco extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {},
      reco: [],
      recoTable: [],
      loading: false
    };
  }

  fetchReco(compTerit, specialite, domaine) {
    let self = this;
    this.setState({ loading: true });
    fetch(
      `https://v86y9ouqxb.execute-api.eu-west-1.amazonaws.com/dev/reco?compTerit=${encodeURIComponent(
        compTerit,
      )}&specialite=${encodeURIComponent(
        specialite,
      )}&domaine=${encodeURIComponent(domaine)}`,
    )
      .then(res => res.json())
      .then(res => {
        self.setState({
          reco: res,
          recoTable: this.buildRecoTable(res),
          loading: false,
        });
      });
  }

  buildRecoTable(reco) {
    return reco.map(r => {
      const nbMissions = r[`nb_missions_${this.state.filters.domaine}`];
      return {
        AvocatId: r.nameAvocat ? (
          <span className="avocat-name">{r.nameAvocat}</span>
        ) : (
          <em className="avocat-id">{r.AvocatId}</em>
        ),
        Critères: `${Math.floor(r.Critères * 100)} %`,
        nb_missions: nbMissions === 0 ? '-' : nbMissions,
        partenariat:
          r.Partenaire === 'Y' ? (
            'Partenaire'
          ) : (
            <span className="not-partner">Non partenaire</span>
          ),
        cout: `${Math.floor(r.Côut * 100) / 100.0} €`,
      };
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
        headerStyle: { textAlign: 'left' },
        style: { textAlign: 'left' },
      },
      {
        Header: 'Critères',
        accessor: 'Critères',
        headerStyle: { textAlign: 'left' },
        style: { textAlign: 'left' },
      },
      {
        Header: `Nb Missions "${this.state.filters.domaine || ''}"`,
        accessor: 'nb_missions',
        headerStyle: { textAlign: 'left' },
        style: { textAlign: 'left' },
      },
      {
        Header: 'Partenariat',
        accessor: 'partenariat',
        headerStyle: { textAlign: 'left' },
        style: { textAlign: 'left' },
      },
      {
        Header: 'Coût moyen',
        accessor: 'cout',
        headerStyle: { textAlign: 'left' },
        style: { textAlign: 'left' },
      },
    ];

    return (
      <div className="Reco">
        <ReactTable
          columns={columns}
          data={this.state.recoTable}
          defaultPageSize={5}
          noDataText="Aucun résultat"
          ofText="sur"
          rowsText="lignes"
          previousText="Précédents"
          nextText="Suivants"
          loadingText="Chargement..."
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Reco;
