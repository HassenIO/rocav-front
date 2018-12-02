import React, { Component } from 'react';

class RecoTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reco: props.reco
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ reco: nextProps.reco });
  }

  render() {
    return (
      <div className="RecoTable">
        Reco
      </div>
    );
  }
}

export default RecoTable;

