import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Footer from "./common/footer";
import { Link } from "react-router-dom";
import { login } from "../actions/users";
import "./common/css/index.scss";
import "./common/css/signup.scss";
import "./common/css/mobile.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      showDropDown: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  onSubmit(e) {
    e.preventDefault();
    const { data } = this.state;
    const user = {
      email: data.email,
      password: data.password
    };

    this.props.login(user).then(res => {
      this.props.history.push("/admin");
    });
  }

  render() {
    const myFlexStyle = {
      justifyContent: "flex-start",
      width: "30%",
      alignSelf: "center",
      height: "14.95em",
      marginLeft: "-1em",
      marginTop: "-1em"
    };
    const starFlex = {
      paddingLeft: "2em"
    };
    const politicoImg = {
      paddingLeft: "1.8em"
    };
    const votingText = {
      fontSize: "0.7em",
      paddingLeft: "2.5em"
    };
    const unityImage = {
      backgroundImage: "url('https://imgur.com/GDW1wMx.png')"
    };
    const faithImage = {
      backgroundImage: "url('https://imgur.com/0NCSSga.png')"
    };
    const peaceImage = {
      backgroundImage: "url('https://imgur.com/fqslqtq.png')"
    };
    const voteDesignText = {
      height: "10em",
      backgroundColor: "rgba(20, 21, 52, 0.6)",
      color: "white",
      textAlign: "center",
      paddingTop: "1em"
    };
    const flexTopicStyle = {
      backgroundColor: "#BB1B23"
    };
    const makeRed = {
      color: "#BB1A22",
      fontWeight: "bolder",
      marginLeft: "4rem"
    };

    const token = localStorage.getItem("token");

    return (
      <div>
        <div id="mynav-flex-container">
          <div id="mynavbar" className="nav-styles">
            <Link to="/">Home</Link>
            <Link to="/admin">{token ? "Party" : ""}</Link>
            <Link to="/candidate">{token ? "Candidate" : ""}</Link>
            <Link to="/view-result">{token ? "Result" : ""}</Link>
          </div>
          <div id="push-right" className="nav-styles">
            <Link id="pollogo" to="/">
              POLITICO
            </Link>
            <Link id="reg" to="/register">
              {token ? "" : "Signup"}
            </Link>
            <Link to="/login">{token ? "" : "Login"}</Link>
            <a id="ham" onClick={this.hideMobileDiv}>
              <i className="fa fa-bars" />
            </a>
          </div>
        </div>

        {this.state.showDropDown ? (
          <div id="drop-down-container">
            <div className="drop-down" id="dropdown-child-one">
              <Link to="/">Home</Link>
              <Link to="/admin">{token ? "Party" : ""}</Link>
              <Link to="/candidate">{token ? "Candidate" : ""}</Link>
              <Link to="/view-result">{token ? "Result" : ""}</Link>
            </div>
            <div className="drop-down" id="last-two">
              <Link to="/register">{token ? "" : "Signup"}</Link>
            </div>
            <div className="drop-down" id="last-two">
              <Link to="Login">{token ? "" : "Login"}</Link>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="myflex-container">
          <div style={myFlexStyle}>
            <div>
              <div>
                <i className="fa fa-star" style={starFlex} />
              </div>
              <p style={makeRed}>Politico</p>
            </div>
            <small style={votingText}>
              Voting is your constitutional right
            </small>
          </div>
          <div id="middle-flex">
            <img
              src="https://imgur.com/WN6pY1Y.png"
              height="100%;"
              width="100%;"
            />
          </div>
        </div>

        <div id="move-image">
          <div id="show-image-mobile" />
        </div>

        <div id="flex-topic-container">
          <div className="topics">
            <div style={flexTopicStyle}>
              <i className="fa fa-group" /> Unity
            </div>
            <div style={unityImage}>
              <div className="topic-opacity">
                <i className="fa fa-child" /> Faith
              </div>
            </div>
            <div style={faithImage}>
              <div className="topic-opacity">
                <i className="fa fa-leaf" /> Peace
              </div>
            </div>
            <div style={peaceImage}>
              <div className="topic-opacity">
                <i className="fa fa-heart" /> Progress
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div id="home-text">
          “Together <span className="black-text">we the people achieve</span>{" "}
          more than any single person could ever do alone. It is time to
          <span className="black-text">move beyond partisanship</span> and build
          a stronger tomorrow.”
        </div>

        <div>
          <div id="vote-design">
            <div id="image-text" style={voteDesignText}>
              VOTE!
              <br />
              <br />
              make your voice heard and be counted because <br />
              <br />
              <br />
              YOUR vote IS your POWER
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
