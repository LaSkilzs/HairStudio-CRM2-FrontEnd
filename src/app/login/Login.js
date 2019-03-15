import React, { Component } from "react";
import LoginForm from "../login/LoginForm";
import LoginShowcase from "../login/LoginShowcase";
import "../login/login.css";

class Login extends Component {
  render() {
    return (
      <div id="login">
        <div className="login-container">
          <LoginForm />
          <LoginShowcase />
        </div>
      </div>
    );
  }
}
export default Login;
