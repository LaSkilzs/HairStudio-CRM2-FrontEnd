import React from "react";
import "./App.css";
import Website from "./website/Website";
import Client from "./client/Client";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "La",
      showLogin: false
    };
  }

  login = username => this.setState({ username });
  logout = () => this.setState({ username: "" });
  handleLogin = () => this.setState({ showLogin: !this.state.showLogin });

  render() {
    return (
      <div className="main-container">
        {this.state.username === " " ? (
          <Website
            handleLogin={this.handleLogin}
            showLogin={this.state.showLogin}
          />
        ) : (
          <Client
            handleLogin={this.handleLogin}
            showLogin={this.state.showLogin}
          />
        )}
      </div>
    );
  }
}

export default App;
