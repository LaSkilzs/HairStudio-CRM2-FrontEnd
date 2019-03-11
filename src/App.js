import React, { Component } from "react";
import "./App.css";
import Login from "./app/Login";
import Navbar from "./app/Navbar";
import Website from "./app/Website";
import Client from "./app/Client";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>App Component</h1>
          <Navbar />
          <Login />
          <Website />
          <Client />
        </header>
      </div>
    );
  }
}

export default App;
