import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { register } from "../actions/users";
import Footer from "./common/footer";
import "./common/css/index.scss";
import "./common/css/signup.scss";
import "./common/css/mobile.scss";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      othername: "",
      email: "",
      passportUrl: "",
      password: "",
      confirmpass: "",
      phoneNumber: "",
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
      firstname: data.firstname,
      lastname: data.lastname,
      othername: data.othername,
      passportUrl: data.passportUrl,
      password: data.password,
      confirmpass: data.confirmpass,
      phoneNumber: data.phoneNumber
    };

    this.props.register(user).then(res => {
      this.props.history.push("/admin");
    });
  }

  render() {
    const resetTagStyle = {
      fontSize: "15px",
      color: "#111A25"
    };

    const signupCaseStyle = {
      lineHeight: "70px"
    };

    const formStyle = {
      lineHeight: "61px"
    };
    return (
      <div>
        <div id="mynav-flex-container">
          <div id="mynavbar" className="nav-styles">
            <Link to="/">Home</Link>
          </div>
          <div id="push-right" className="nav-styles rightSmall">
            <Link id="pollogo" to="/">
              POLITICO
            </Link>
            <Link to="/login">Login</Link>
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
            <div className="drop-down" id="last-two">
              <Link to="/login">Login</Link>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="signup-flex-container">
          <div id="signup-image-case">
            <img src="https://i.ibb.co/zZR4BGR/signupthree.jpg" width="100%;" />
          </div>
          <div id="signup-case" style={signupCaseStyle}>
            <div id="signup-input-case">
            <h5 id="signup-header">Signup</h5>
              <form onSubmit={this.onSubmit} id="register-form" style={formStyle}>
                <div>
                  <p className="small-font-size">Firstname</p>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Firstname..."
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <p className="small-font-size">Lastname</p>
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Lastname..."
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <p className="small-font-size">Othername</p>
                  <input
                    type="text"
                    name="othername"
                    placeholder="Othername..."
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <p className="small-font-size">passportUrl</p>
                  <input
                    type="text"
                    name="passportUrl"
                    placeholder="PassportUrl..."
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <p className="small-font-size">Email</p>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email..."
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <p className="small-font-size">Password</p>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password..."
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <p className="small-font-size">Confirm Password</p>
                  <input
                    type="password"
                    name="confirmpass"
                    placeholder="Confirm Password..."
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <p className="small-font-size">Phone</p>
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number..."
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <button className="button"> Signup</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Signup.propTypes = {
  register: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(
  mapStateToProps,
  { register }
)(Signup);
