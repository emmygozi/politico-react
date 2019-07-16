import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { register } from "../actions/users";
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
      phoneNumber: data.phoneNumber,
    };

    this.props.register(user).then(res => {
      
    });
  }

  render() {
    const resetTagStyle = {
      fontSize: "15px",
      color: "#111A25"
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
          <div id="signup-image-case">
            <img src="https://i.ibb.co/zZR4BGR/signupthree.jpg" width="100%;" />
          </div>
          <div id="signup-case">
            <h2 id="signup-header">Signup</h2>
            <div id="signup-input-case">
              <form onSubmit={this.onSubmit} id="register-form">
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
                <Link to="" style={resetTagStyle}>
                  Forgot password?
                </Link>
              </form>
            </div>
          </div>
        </div>
        <div className="myfooter">
          <p>&#169; EMMYGOZI 2019, Andela Nigeria Fellowship Cycle 41</p>
        </div>
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
