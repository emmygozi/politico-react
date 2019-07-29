import React from "react";
import { Link } from "react-router-dom";

const PartyCardContainer = props => {
    const redButton = {
        backgroundColor: "#BB1A22",
        borderRadius: "5rem",
        width: "3rem",
        padding: "0.5rem",
        color: "white"
    };
  return (    
    <div className="card" id="cardMobile">
      <i className="fa fa-umbrella fa-2x" />
      <div className="card-container">
        <h4>
          <b>
            Party Name:{" "}
            {props.name}
          </b>
        </h4>
        <h4>
          HQ Address:{" "}
          <b>{props.hqaddress}</b>
        </h4>
        <Link to={`/edit_party?id=${props.id}`}>
        Edit
      </Link>
      <button type="button" style={redButton} onClick={props.delete}>
        Delete
      </button>
      </div>
    </div>
  );
};

export default PartyCardContainer;
