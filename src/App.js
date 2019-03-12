import React, { Component } from "react";
import "./App.css";
import Login from "./app/Login";
import Navbar from "./app/Navbar";
import Website from "./app/Website";
import Client from "./app/Client";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }
  render() {
    return (
      <div className="main-container">
        <Navbar loggedIn={this.state.loggedIn} />
        <Website />
        <Login />
        <Client />
      </div>
    );
  }
}

export default App;
