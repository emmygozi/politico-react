import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { fetchParties } from "../actions/candidate";
import { editPartyName } from "../actions/parties";
import Footer from "./common/footer";
import "./common/css/index.scss";
import "./common/css/signup.scss";
import "./common/css/mobile.scss";
import "./common/css/candidate.scss";
import "./common/css/slider.scss";
import "./common/css/mobiletwo.scss";

class UpdateParty extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      party: "",
      showDropDown: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { fetchParties } = this.props;
    fetchParties();
    const { search } = this.props.location;
    const id = search ? search.split("=")[1] : "";
    this.setState({ id });
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

  onSubmit(e) {
    e.preventDefault();
    const id = Number(this.state.id);
    let { data } = this.state;
    if (!data) {
    }
    console.log(e.target, "submit data");
    const { editPartyName } = this.props;
    const editName = {
      name: data.name
    };

    editPartyName(id, editName).then(res => {
      this.props.history.push("/admin");
    });
  }

  render() {
    const { parties } = this.props.candidate;
    console.log(this.props.parties, "Party sucess");
    let editParty;
    const id = Number(this.state.id);
    console.log(parties, "state parties");
    if (parties === undefined) return <></>;
    editParty = parties.find(result => result.id === id);
    if (editParty === undefined) return <></>;
    editParty = editParty.name;

    console.log(editParty, "EditParty");

    const notifyCandidates = {
      lineHeight: "1.5",
      fontSize: "1rem",
      marginBottom: "2rem",
      marginTop: "8rem"
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

    const editHeader = {
      textAlign: "center",
      color: "white"
    };

    const adjustMarginMod = {
      marginLeft: "5rem"
    };

    return (
      <div>
        <div id="mynav-flex-container">
          <div id="mynavbar" className="nav-styles">
            <Link to="/">Home</Link>
            <Link to="/admin">Party</Link>
            <Link to="/candidate">Become a candidate</Link>
            <Link to="/view-result">Result</Link>
          </div>
          <div id="push-right" className="nav-styles rightSmall">
            <Link id="pollogo" to="/">
              POLITICO
            </Link>
            <Link onClick={this.logout} to="">
              Logout
            </Link>
            <a id="ham" onClick={this.hideMobileDiv}>
              <i className="fa fa-bars" />
            </a>
          </div>
        </div>

        {this.state.showDropDown ? (
          <div id="drop-down-container">
            <div className="drop-down" id="dropdown-child-one">
              <Link to="/">Home</Link>
            </div>
            <div className="drop-down">
              <Link to="/admin">Party</Link>
            </div>
            <div className="drop-down">
              <Link to="/candidate">Become a candidate</Link>
            </div>
            <div className="drop-down">
              <Link to="/view-result">Result</Link>
            </div>
            <div className="drop-down" id="last-two">
              <Link onClick={this.logout} to="">
                Logout
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}|

        <div className="signup-flex-container">
          <div id="signup-image-case-two" className="striped-background makelonger">
            <div
              className="striped-background-child"
              className="bolden"
              id="boldittwo"
            >
              <div id="notifyCandidates" style={notifyCandidates} />
              <form onSubmit={this.onSubmit}>
                <h3 style={editHeader}>Edit Party</h3>
                <div className="mobile-party-form" />
                <div className="party-form">
                  <input
                    style={adjustMarginMod}
                    type="text"
                    placeholder="Party name"
                    name="name"
                    onChange={this.handleInputChange}
                    defaultValue={editParty ? editParty : ""}
                  />
                </div>
                <div style={partyButton}>
                  <button
                    className="button"
                    style={submitButton}
                    id="submitButton"
                    disabled={!this.state.data}
                  >
                    Edit party
                  </button>
                </div>
              </form>
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

UpdateParty.propTypes = {
  fetchParties: PropTypes.func.isRequired,
  editPartyName: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  candidate: state.candidate,
  parties: state.parties
});

export default connect(
  mapStateToProps,  
  { fetchParties, editPartyName }
)(UpdateParty);
