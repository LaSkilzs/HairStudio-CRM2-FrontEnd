import React from "react";
import "./App.css";
import Login from "./login/Login";
import Navbar from "./navbar/Navbar";
import Website from "./website/Website";
import Client from "./client/Client";

class App extends React.Component {
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
