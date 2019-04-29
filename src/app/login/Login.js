import React from "react";
import LoginForm from "../login/LoginForm";
import LoginShowcase from "../login/LoginShowcase";
import "../login/login.css";

const Login = props => {
  return (
    <section id="login">
      <div className="login-container">
        <LoginForm />
        <LoginShowcase />
      </div>
    </section>
  );
};
export default Login;
