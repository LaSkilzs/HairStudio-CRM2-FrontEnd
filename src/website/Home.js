import React from "react";
import "./welcome.css";
const Home = ({ name }) => {
  return (
    <section id="home">
      <div className="home-title">
        <h1 className="home-text">Shear Elegance</h1>
        <div className="home-underline" />
        <div className="home-btn">
          <button type="button">Book Today</button>
          <button type="button">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
