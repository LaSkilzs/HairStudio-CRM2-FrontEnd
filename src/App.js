import React, { Component } from "react";
import "./App.css";
import Login from "./app/Login";
import Navbar from "./app/Navbar";
import Website from "./app/Website";
import Client from "./app/Client";

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Navbar />
        <Login />
        <Website />
        <Client />
      </div>
    );
  }
}

export default App;
