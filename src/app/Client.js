import React from "react";
import Profile from "../client/Profile";
import Appointment from "../client/Appointment";
import Line from "../client/Line";
import Dashboard from "../client/Dashboard";
import Newsfeed from "../client/Newsfeed";

class Client extends React.Component {
  render() {
    return (
      <div className="client-container">
        <Profile />
        <Appointment />
        <Line />
        <Dashboard />
        <Newsfeed />
      </div>
    );
  }
}
export default Client;
