import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Home from "./Home";
import Gallery from "./gallery/Gallery";
import Services from "./services/Services";
import Testimonials from "./testimonials/Testimonials";
import About from "./about/About";
import Contact from "./contact/Contact";
import Login from "../login/Login";
import Footer from "./Footer";

class Website extends React.Component {
  render() {
    return (
      <div className="website-container">
        {this.props.showLogin ? null : (
          <Navbar handleLogin={this.props.handleLogin} />
        )}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/testimonials" component={Testimonials} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route
            exact
            path="/login"
            render={routerProps => <Login {...routerProps} />}
          />
          <Route exact path="/footer" component={Footer} />
          <Route render={() => <p>Not Found</p>} />
        </Switch>
      </div>
    );
  }
}

export default Website;
