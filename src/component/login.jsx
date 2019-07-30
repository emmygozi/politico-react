import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { login } from "../actions/users";
import Footer from "./common/footer";
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
  }

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

    this.props.login(user).then((res) => {
      this.props.history.push('/admin');
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
            <Link to="/">Home</Link>
          </div>
          <div id="push-right" className="nav-styles rightSmall">
            <Link id="pollogo" to="/">
              POLITICO
            </Link>
            <Link to="/register">
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
              <Link to="/">Home</Link>
            </div>
            <div className="drop-down" id="last-two">
              <Link to="/register">
                Signup
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
        <div id="signup-case" className="makelonger">
          <h2 id="signup-header">Login</h2>
          <div id="signup-input-case">
            <form onSubmit={this.onSubmit}>
              <div>
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
                <button className="button"> Login</button>
              </div>
              <Link to="" style={resetTagStyle}>
                Forgot password?
              </Link>
            </form>
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
