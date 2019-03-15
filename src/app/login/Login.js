import React, { Component } from "react";
import LoginForm from "../login/LoginForm";
import LoginShowcase from "../login/LoginShowcase";
import "../login/login.css";

class Login extends Component {
  render() {
    const { clickHandler } = this.props;
    return (
      <div id="login">
        <div className="login-container">
          <LoginForm />
          <LoginShowcase clickHandler={clickHandler} />
        </div>
      </div>
    );
  }
}
export default Login;
