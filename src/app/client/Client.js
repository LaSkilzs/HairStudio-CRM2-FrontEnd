import React from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "./profile/Profile";
import Appointment from "./appointment/Appointment";
import Line from "./line/Line";
import Dashboard from "./dashboard/Dashboard";
import Newsfeed from "./newsfeed/Newsfeed";
import SideBar from "../navbar/SideBar";
import Header from "../navbar/Header";

class Client extends React.Component {
  render() {
    return (
      <section id="client">
        <Header />
        {/* <Head /> */}
        <div className="client-container">
          <SideBar />
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/appointment" component={Appointment} />
            <Route path="/line" component={Line} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/newsfeed" component={Newsfeed} />
            <Route render={() => <p>Not Found</p>} />
          </Switch>
        </div>
      </section>
    );
  }
}
export default Client;
