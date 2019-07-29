import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchResult } from "../actions/result";
import "./common/css/index.scss";
import "./common/css/mobile.scss";
import CardContainer from "./common/cardContainer/cardContainer";
import Footer from "./common/footer";

class Result extends Component {
  constructor() {
    super();
    this.state = {
      results: "",
      showDropDown: false
    };
  }

  componentDidMount() {
    this.props.fetchResult();
  }

  hideMobileDiv = () => {
    const { showDropDown } = this.state;
    this.setState({
      showDropDown: !showDropDown
    });
  };

  handleInputChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data });
  };

  render() {
    console.log(this.props.results.results[0], "Prop results");
    const aResult = this.props.results;
    const results = aResult ? (
      this.props.results.results.map((result, i) => (
        <CardContainer
          key={i}
          results={result.results}
          office={result.office}
          candidate={result.candidate}
          delete={event => this.handleDelete(event, i)}
        />
      ))
    ) : (
      <div className="no_result">
        <p id="no-result" className="result-container">
          No results Yet....
        </p>
      </div>
    );
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
        <div className="body-container">
          <hr />

          <h2 className="body-container">Local Government Results</h2>

          <div className="result-container">{results}</div>
          <Footer />
        </div>
      </div>
    );
  }
}

Result.propTypes = {
  fetchResult: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  results: state.results
});

export default connect(
  mapStateToProps,
  { fetchResult }
)(Result);
