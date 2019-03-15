import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "../navbar/Navbar";
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
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/services" component={Services} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Footer />
          <Route render={() => <p>Not Found</p>} />
        </Switch>
      </div>
    );
  }
}

export default Website;
