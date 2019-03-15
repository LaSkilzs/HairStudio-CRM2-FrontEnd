import React from "react";
import { Link } from "react-router-dom";

const LoginShowcase = ({ clickHandler }) => {
  return (
    <div id="right">
      <div className="showcase-content">
        <h1 className="showcase-text">
          Come and Hang with Us <strong>@ShopTalk</strong>
        </h1>
        <Link to="/" className="secondary-btn" onClick={() => clickHandler}>
          Sign Up Today
        </Link>
      </div>
    </div>
  );
};

export default LoginShowcase;
