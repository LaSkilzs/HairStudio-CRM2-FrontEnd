import React from "react";
import Horizontal from "../navbar/Horizontal";
import "../App.css";

const Navbar = props => {
  return (
    <section className="nav-container">
      <Horizontal handleLogin={props.handleLogin} />
    </section>
  );
};

export default Navbar;
