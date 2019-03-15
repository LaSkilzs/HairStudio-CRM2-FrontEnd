import React from "react";
import LoginForm from "../login/LoginForm";
import LoginShowcase from "../login/LoginShowcase";
import "../login/login.css";

const Login = props => {
  return (
    <div id="login">
      <div className="login-container">
        <LoginForm />
        <LoginShowcase />
      </div>
    </div>
  );
};
export default Login;
