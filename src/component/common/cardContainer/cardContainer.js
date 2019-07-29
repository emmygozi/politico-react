import React from "react";

const CardContainer = props => {
  return (
    <div className="card">
      <i className="fa fa-suitcase fa-2x" />
      <div className="card-container">
        <h4>
          <b>Office Name: {props.office === 1 ? 'Local Government' : 'Governorship'}</b>
        </h4>
        <h4>Candidate Name: <b>{props.candidate === 1 ? 'Christiano Ronaldo' : ''}</b></h4>
        <p>Candidate Result: {props.results} Votes</p>
      </div>
    </div>
  );
};

export default CardContainer;
