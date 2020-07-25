import React, { Component } from 'react';
import Toto from './Toto';

class Maman extends Component {
  state = {
    messageMaman: null,
    messageToto: null,
  };

  odreMaman = () => {
    this.setState({
      messageMaman: 'Va Ranger ta chambre !',
    });
  };

  totoResponse = () => {
    this.setState({
      messageToto: "D'accord Maman",
    });
  };

  render() {
    return (
      <div>
        <h1> Maman </h1>
        <button onClick={this.odreMaman}> Ordre de la mère </button>
        <h3>{this.state.messageMaman}</h3>
        <hr />
        <Toto name="Toto" theState={this.state} totoRsp={this.totoResponse} />
      </div>
    );
  }
}

export default Maman;
