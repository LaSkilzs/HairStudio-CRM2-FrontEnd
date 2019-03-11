import React from "react";
import Home from "../website/Home";
import Gallery from "../website/Gallery";
import Services from "../website/Services";
import Testimonials from "../website/Testimonials";
import About from "../website/About";
import Contact from "../website/Contact";
import Footer from "../website/Footer";

class Website extends React.Component {
  render() {
    return (
      <div>
        <h1>Website here!</h1>
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
