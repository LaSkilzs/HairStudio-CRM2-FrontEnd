import React from "react";
import Horizontal from "../navbar/Horizontal";
import SideBar from "../navbar/SideBar";
import Header from "../navbar/Header";
import "../App.css";

const Navbar = ({ loggedIn }) => {
  return (
    <section className="nav-container">
      {loggedIn ? (
        <nav className="side-nav">
          <SideBar />
          <Header />
        </nav>
      ) : (
        <nav className="hori-nav">
          <Horizontal />
        </nav>
      )}
    </section>
  );
};

export default Navbar;
