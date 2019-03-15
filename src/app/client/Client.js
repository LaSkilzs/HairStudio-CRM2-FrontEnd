import React from "react";
import Profile from "./profile/Profile";
import Appointment from "./appointment/Appointment";
import Line from "./line/Line";
import Dashboard from "./dashboard/Dashboard";
import Newsfeed from "./newsfeed/Newsfeed";
import Head from "../../components/Head";

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
