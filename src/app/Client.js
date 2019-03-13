import React from "react";
import Profile from "../client/Profile";
import Appointment from "../client/Appointment";
import Line from "../client/Line";
import Dashboard from "../client/Dashboard";
import Newsfeed from "../client/Newsfeed";
import Head from "../components/Head";

class Client extends React.Component {
  render() {
    return (
      <section id="client">
        <Head />
        <div className="client-container">
          <Profile />
          <Appointment />
          <Line />
          <Dashboard />
          <Newsfeed />
        </div>
      </section>
    );
  }
}
export default Client;
