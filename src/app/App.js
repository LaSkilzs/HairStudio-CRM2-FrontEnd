import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Login from "./login/Login";
import Website from "./website/Website";
import Client from "./client/Client";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true,
      showLogIn: false
    };
  }

  clickHandler = () =>
    this.setState({ showLogIn: !this.state.showLogIn, loggedIn: " " });
  render() {
    return (
      <div className="main-container">
        {this.state.loggedIn ? (
          <Client clickHandler={this.clickHandler} />
        ) : (
          <Website clickHandler={this.clickHandler} />
        )}
        {this.state.loggedIn === "" && (
          <Route
            exact
            path="/login"
            render={props => (
              <Login {...props} clickHandler={this.clickHandler} />
            )}
          />
        )}
      </div>
    );
  }
}

export default App;
