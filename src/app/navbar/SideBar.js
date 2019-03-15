import React from "react";
import "../navbar/navbar.css";

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
            <a href="##">
              <span>
                <i className="fas fa-home" />
              </span>
              Home
            </a>
          </li>
          <li>
            <a href="##">
              <span>
                <i className="fas fa-users" />
              </span>
              Profile
            </a>
          </li>
          <li>
            <a href="##">
              <span>
                <i className="fas fa-briefcase" />
              </span>
              Stylist Profile
            </a>
          </li>
          <li>
            <a href="##">
              <span>
                <i className="fas fa-calendar-check" />
              </span>
              Appointment
            </a>
          </li>
          <li>
            <a href="##">
              <span>
                <i className="fas fa-tachometer-alt" />
              </span>
              Dashboard
            </a>
          </li>
          <li>
            <a href="##">
              <span>
                <i className="fas fa-newspaper" />
              </span>
              NewsFeed
            </a>
          </li>
          <li>
            <a href="##">
              <span>
                <i className="fas fa-sign-out-alt" />
              </span>
              Logout
            </a>
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
};

export default SideBar;
