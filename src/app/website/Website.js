import React from "react";
import Home from "./Home";
import Gallery from "./gallery/Gallery";
import Services from "./services/Services";
import Testimonials from "./testimonials/Testimonials";
import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./Footer";

class Website extends React.Component {
  render() {
    return (
      <div className="website-container">
        <Home />
        <Gallery />
        <Services />
        <Testimonials />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Website;
