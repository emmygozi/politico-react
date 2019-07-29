import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { fetchParties } from "../actions/candidate";
import { registerParty, deleteParty } from "../actions/parties";
import Footer from "./common/footer";
import PartyCardContainer from "./common/cardContainer/partyCardContainer";
import "./common/css/index.scss";
import "./common/css/signup.scss";
import "./common/css/mobile.scss";
import "./common/css/candidate.scss";
import "./common/css/slider.scss";
import "./common/css/mobiletwo.scss";

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      party: "",
      showDropDown: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { fetchParties } = this.props;
    fetchParties();
  }

  hideMobileDiv = () => {
    const { showDropDown } = this.state;
    this.setState({
      showDropDown: !showDropDown
    });
  };

  handleInputChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    console.log(input.value, "allinput");
    data[input.name] = input.value;

    this.setState({ data });
  };

  handleDelete = (e, id) => {
    e.preventDefault();
    this.props.deleteParty(id).then(res => {
        window.location.reload();
    });
  };

  onSubmit(e) {
    e.preventDefault();
    const { data } = this.state;
    console.log(data, "submit data");
    const { registerParty } = this.props;
    const newParty = {
      name: data.name,
      logoUrl: data.logoUrl,
      hqAddress: data.hqAddress
    };

    registerParty(newParty);
  }

  render() {
    const { parties } = this.props.candidate;
    console.log(this.props.parties, "Party sucess");
    let allParties;
    console.log(parties, "state parties");
    if (parties === undefined) return <></>;
    allParties = parties.map((result, i) => (
      <PartyCardContainer
        key={i}
        id={result.id}
        name={result.name}
        hqaddress={result.hqaddress}
        delete={event => this.handleDelete(event, result.id)}
      />
    ));

    console.log(allParties, "All parties");

    const notifyCandidates = {
      lineHeight: "1.5",
      fontSize: "1rem",
      marginBottom: "2rem"
    };
    const signupImageStyle = {
      width: "30%"
    };

    const partyButton = {
      textAlign: "center"
    };
    const submitButton = {
      backgroundColor: "#2c946e"
    };

    return (
      <div>
        <div id="mynav-flex-container">
          <div id="mynavbar" className="nav-styles">
            <Link to="">Home</Link> <Link to="">View result</Link>
            <Link to="">Become a candidate</Link>
            <Link to="">Vote</Link> <Link to="">Petition result</Link>
          </div>
          <div id="push-right" className="nav-styles">
            <Link id="pollogo" to="">
              POLITICO
            </Link>
            <Link id="reg" to="">
              Signup
            </Link>
            <a id="ham" onClick={this.hideMobileDiv}>
              <i className="fa fa-bars" />
            </a>
          </div>
        </div>

        {this.state.showDropDown ? (
          <div id="drop-down-container">
            <div className="drop-down" id="dropdown-child-one">
              <Link to="index.html">Home</Link>
            </div>
            <div className="drop-down">
              <Link to="">View result</Link>
            </div>
            <div className="drop-down">
              <Link to="">Petition result</Link>
            </div>
            <div className="drop-down">
              <Link to="">Become a candidate</Link>
            </div>
            <div className="drop-down">
              <Link to="">Vote</Link>
            </div>
            <div className="drop-down" id="last-two">
              <Link to="">Signup</Link>
            </div>
            <div className="drop-down" id="last-two">
              <Link id="logout" to="#">
                Logout
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="signup-flex-container">
          <div id="signup-image-case-two" className="striped-background">
            <div
              className="striped-background-child"
              className="bolden"
              id="boldittwo"
            >
              <div id="notifyCandidates" style={notifyCandidates} />
              <form onSubmit={this.onSubmit}>
                <div className="mobile-party-form" />
                <div className="party-form">
                  <input
                    type="text"
                    placeholder="Party name"
                    name="name"
                    onChange={this.handleInputChange}
                  />
                  <input
                    type="text"
                    placeholder="HQ address"
                    name="hqAddress"
                    onChange={this.handleInputChange}
                  />
                  <input
                    type="text"
                    placeholder="Logo url"
                    name="logoUrl"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div style={partyButton}>
                  <button
                    className="button"
                    style={submitButton}
                    id="submitButton"
                  >
                    Create party
                  </button>
                </div>
              </form>
            </div>
            <div className="makeRow" id="makeRowMobile">
              {allParties}
            </div>
          </div>
          <div id="signup-case-two" style={signupImageStyle}>
            <h2 id="signup-header">
              Admin can create, modify, view and delete created party
            </h2>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Admin.propTypes = {
  fetchParties: PropTypes.func.isRequired,
  registerParty: PropTypes.func.isRequired,
  deleteParty: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  candidate: state.candidate,
  parties: state.parties
});

export default connect(
  mapStateToProps,
  { fetchParties, registerParty, deleteParty }
)(Admin);
