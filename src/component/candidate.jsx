import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { logout } from "../actions/users";
import {
  fetchOffice,
  fetchParties
} from "../actions/candidate";
import Footer from "./common/footer";
import DropDownContainer from "./common/DropDownContainer";
import "./common/css/index.scss";
import "./common/css/signup.scss";
import "./common/css/mobile.scss";
import "./common/css/mobiletwo.scss";
import "./common/css/candidate.scss";

class Candidate extends Component {
  constructor() {
    super();
    this.state = {
      office: "",
      party: "",
      showDropDown: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { fetchOffice, fetchParties } = this.props;
    fetchParties();
    fetchOffice();
  }

  hideMobileDiv = () => {
    const { showDropDown } = this.state;
    this.setState({
      showDropDown: !showDropDown
    });
  };

  handleInputChange = ({ currentTarget: select }) => {
    const data = { ...this.state.data };
    console.log(select.value, "allselect");
    data[select.name] = select.value;

    this.setState({ data });
  };

  logout = e => {
    e.preventDefault();
    this.props.logout();
  };

  onSubmit(e) {
    e.preventDefault();
    const { data } = this.state;
    console.log(data, "submit data");
    const user = {
      office: data.office,
      party: data.party
    };

    // this.props.indicateYourCandidacy(user);
  }

  render() {
    const { offices, parties } = this.props.candidate;
    let allParties;
    console.log(parties, "state parties");
    if (parties === undefined) return <></>;
    allParties = parties.map((result, i) => (
      <DropDownContainer key={i} id={result.id} name={result.name} />
    ));

    console.log(allParties, "All parties");

    const allOffices = offices.map((result, i) => (
      <DropDownContainer key={i} id={result.id} name={result.name} />
    ));
    const notifyCandidates = {
      lineHeight: "1.5",
      fontSize: "1rem",
      marginBottom: "2rem"
    };
    const styleCandidate = {
      color: "#EEEEEE"
    };

    const styleParty = {
      marginTop: "-1em"
    };
    const signupImageStyle = {
      width: "30%"
    };

    const candidateSelection = {
      width: "10rem",
      height: "1.8rem"
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
          <div id="push-right" className="nav-styles">
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
        )}

        <div className="signup-flex-container">
          <div id="signup-image-case-two" className="striped-background">
            <div
              className="striped-background-child"
              className="bolden"
              id="boldittwo"
            >
              <div id="notifyCandidates" style={notifyCandidates} />
              <form
                id="candidateForm"
                name="candidateForm"
                onSubmit={this.onSubmit}
              >
                <h3 style={styleCandidate} id="become-cand">
                  Become a candidate
                </h3>
                <div>
                  <label>Office</label>
                  <select
                    style={candidateSelection}
                    onChange={this.handleInputChange}
                    name="office"
                  >
                    <option>Select office</option>
                    {allOffices}
                  </select>
                  <div id="" />
                  <div className="small-font-size" style={styleParty}>
                    <br />
                    <label>Party</label>
                    <select
                      style={candidateSelection}
                      onChange={this.handleInputChange}
                      name="party"
                    >
                      <option>Select party</option>
                      {allParties}
                    </select>
                  </div>
                  <div />
                  <br />
                  <button type="submit" className="button">
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div id="signup-case-two" style={signupImageStyle}>
            <h2 id="signup-header">
              Express interest to run for a particular office. Excercise your
              right to vote and be voted for today
            </h2>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Candidate.propTypes = {
  fetchOffice: PropTypes.func.isRequired,
  fetchParties: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  candidate: state.candidate
});

export default connect(
  mapStateToProps,
  { fetchOffice, fetchParties, logout }
)(Candidate);
