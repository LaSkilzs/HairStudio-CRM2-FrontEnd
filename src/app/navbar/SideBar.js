import React from "react";
import "../navbar/navbar.css";
import propTypes from "prop-types";
import { NavLink } from "react-router-dom";

const SideBar = props => {
  return (
    <React.Fragment>
      <section id="side-menu">
        <ul className="side-nav-links">
          <li className="head-link">
            <div className="logo-image">
              <img
                src={require("../../images/logo.png")}
                alt="logo"
                style={{ textAlign: "center" }}
              />
            </div>
            <h1>Shear Elegance</h1>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/">
              <span>
                <i className="fas fa-home" />
              </span>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/profile">
              <span>
                <i className="fas fa-users" />
              </span>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/profile">
              <span>
                <i className="fas fa-briefcase" />
              </span>
              Stylist Profile
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/appointment">
              <span>
                <i className="fas fa-calendar-check" />
              </span>
              Appointment
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/dashboard">
              <span>
                <i className="fas fa-tachometer-alt" />
              </span>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/newsfeed">
              <span>
                <i className="fas fa-newspaper" />
              </span>
              NewsFeed
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeClassName="active"
              to="/login"
              onClick={props.handleLogin}
            >
              <span>
                <i className="fas fa-sign-out-alt" />
              </span>
              Logout
            </NavLink>
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
};

SideBar.propTypes = {
  handleLogin: propTypes.func.isRequired
};
export default SideBar;
