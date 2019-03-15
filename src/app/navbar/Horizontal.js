import React from "react";
import "../navbar/navbar.css";

const Horizontal = () => {
  return (
    <div>
      <ul className="hor-list">
        <li className="hor-item">
          <a href="##" className="logo">
            Shear Elegance
          </a>
        </li>
        <li className="hor-item">
          <a href="##">Home</a>
        </li>
        <li className="hor-item">
          <a href="##">Gallery</a>
        </li>
        <li className="hor-item">
          <a href="##">Services</a>
        </li>
        <li className="hor-item">
          <a href="##">About</a>
        </li>
        <li className="hor-item">
          <a href="##">Contact</a>
        </li>
        <li className="hor-item">
          <a href="##">
            <i className="fas fa-user" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Horizontal;
