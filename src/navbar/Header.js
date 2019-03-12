import React from "react";

const Header = () => {
  return (
    <section id="nav">
      <div className="logo-image">
        <img src={require("../images/logo.png")} alt="logo" />
      </div>
      <div className="side-menu2">
        <input id="search" type="search" placeholder="search here" />

        <div className="user-area">
          <a href="##">+Add</a>
          <a href="##" className="notification">
            <i className="fas fa-bell" /> <span className="circle">3</span>
          </a>
          <a href="##">
            <div className="user-image" />
          </a>
        </div>
        <div className="sign-out">
          <span>
            <i className="fas fa-sign-out-alt" />
          </span>
          Logout
          <span>
            <i className="fas fa-caret-down" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Header;
