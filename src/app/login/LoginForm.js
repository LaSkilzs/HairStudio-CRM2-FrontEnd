import React from "react";
import LoginMisc from "./LoginMisc";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="left">
        <div id="sign-in">
          <div className="login-logo">
            <img src={require("../../images/logo.png")} alt="" />
            <h3>Sheer Elegance</h3>
          </div>
          <form>
            <div>
              <label>Email or Username</label>
              <input type="text" name="" className="login-input" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" name="" className="login-input" />
            </div>
            <button type="submit" className="login-button">
              Sign In
            </button>
          </form>
          <LoginMisc />
        </div>
      </div>
    );
  }
}

export default LoginForm;
