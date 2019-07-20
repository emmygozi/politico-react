import React from "react";
import { Link } from "react-router-dom";

const CardContainer = props => {
  return (
    <div className="card">
      <i className="fa fa-suitcase fa-2x" />
      <div className="card-container">
        <h4>
          <b>Office Name: {props.office}</b>
        </h4>
        <h5>Candidate Name: {props.candidate}</h5>
        <p>Candidate Result: {props.results}</p>
        <p>Candidate Office:  {props.office}</p>
      </div>
      <Link to={`/edit_guide?id=${props.office}`} id="card-button-edit">
        Edit
      </Link>
      <button
        type="button"
        className="button"
        id="card-button-delete"
        onClick={props.delete}
      >
        Delete
      </button>
    </div>
  );
};

export default CardContainer;
