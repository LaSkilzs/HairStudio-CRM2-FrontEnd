import React, { Component } from "react";
import LoginForm from "../login/LoginForm";
import SideA from "../login/SideA";
import SideB from "../login/SideB";

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login Card Here!</h1>
        <SideA />
        <SideB />
        <LoginForm />
      </div>
    );
  }
}
export default Login;
