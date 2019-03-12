import React from "react";
import Horizontal from "../navbar/Horizontal";
import SideBar from "../navbar/SideBar";
import Header from "../navbar/Header";
import "../navbar/navbar.css";

const Navbar = () => {
  return (
    <section className="nav-container">
      <nav className="hori-nav">
        <Horizontal />
      </nav>
      <nav className="side-nav">
        <Header />
        <SideBar />
      </nav>
    </section>
  );
};

export default Navbar;
