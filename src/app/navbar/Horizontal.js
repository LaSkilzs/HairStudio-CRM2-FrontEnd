import React from "react";
import "../navbar/navbar.css";
import { NavLink } from "react-router-dom";

const Horizontal = () => {
  return (
    <div>
      <ul className="hor-list">
        <li className="hor-item">
          <NavLink exact activeClassName="active" to="/" className="logo">
            Shear Elegance
          </NavLink>
        </li>
        <li className="hor-item">
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li className="hor-item">
          <NavLink exact activeClassName="active" to="/gallery">
            Gallery
          </NavLink>
        </li>
        <li className="hor-item">
          <NavLink exact activeClassName="active" to="/services">
            Services
          </NavLink>
        </li>
        <li className="hor-item">
          <NavLink exact activeClassName="active" to="/about">
            About
          </NavLink>
        </li>
        <li className="hor-item">
          <NavLink exact activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
        <li className="hor-item">
          <NavLink exact activeClassName="active" to="/login">
            <i className="fas fa-user" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Horizontal;
