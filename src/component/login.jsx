import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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

    this.props.login(user).then(res => {
    
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
            <Link id="pollogo" to="">POLITICO</Link>
          <Link id="reg" to="">Signup</Link>
          <a id="ham"  onClick={this.hideMobileDiv}><i className='fa fa-bars'></i></a>
        </div>
      </div>
  
      {this.state.showDropDown ? (<div id="drop-down-container">
        <div className="drop-down" id="dropdown-child-one">
          <Link to="index.html">Home</Link>
        </div>
        <div className="drop-down"><Link to="">View result</Link></div>
        <div className="drop-down"><Link to="">Petition result</Link></div>
        <div className="drop-down">
          <Link to="">Become a candidate</Link>
        </div>
        <div className="drop-down"><Link to="">Vote</Link></div>
        <div className="drop-down" id="last-two">
          <Link to="">Signup</Link>
        </div>
        <div className="drop-down" id="last-two">
          <Link id="logout" to="#">Logout</Link>
        </div>
      </div>) : ''}
      <div className="signup-flex-container">
        <div id="signup-image-case">
          <img src="https://i.ibb.co/zZR4BGR/signupthree.jpg" width="100%;" />
        </div>
        <div id="signup-case">
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
      <div className="myfooter">
      <p>&#169; EMMYGOZI 2019, Andela Nigeria Fellowship Cycle 41</p>
    </div>
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
