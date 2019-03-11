import React from "react";
import Horizontal from "../navbar/Horizontal";
import SideBar from "../navbar/SideBar";

const Navbar = () => {
  return (
    <div>
      <nav>
        <h1> Nav Bar here!</h1>
      </nav>
      <SideBar />
      <Horizontal />
    </div>
  );
};

export default Navbar;
