import React from "react";

const LoginMisc = props => {
  return (
    <React.Fragment>
      <div className="login-links">
        <a href="##">Forgot Password</a>
      </div>
      <div className="or">
        <hr className="bar" />
        <span>OR</span>
        <hr className="bar" />
      </div>
      <a href="##" className="secondary-btn">
        Create an account
      </a>
      <footer id="main-footer">
        <p>Copyright &copy; 2019, branmanagement All Rights Reserved</p>
        <div className="misc-links">
          <a href="##" onClick={props.login}>
            terms of user
          </a>
          |
          <a href="##" onClick={props.logout}>
            Privacy Policy
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default LoginMisc;
