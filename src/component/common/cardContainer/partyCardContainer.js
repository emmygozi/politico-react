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
        Party Name:{"     "}
          <b>
            {props.name}
          </b>
        </h4>
        <p>party registered on politico</p>
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
