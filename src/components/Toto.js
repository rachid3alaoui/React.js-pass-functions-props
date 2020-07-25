import React from 'react';

const Toto = (props) => {
  const responseBtn =
    props.theState.messageMaman !== null ? (
      <button onClick={props.totoRsp}>Réponse!</button>
    ) : (
      <button disabled>Réponse!</button>
    );
  return (
    <div>
      <h2>Je suis {props.name}</h2>
      {responseBtn}
      <h3>{props.theState.messageToto}</h3>
    </div>
  );
};

export default Toto;
