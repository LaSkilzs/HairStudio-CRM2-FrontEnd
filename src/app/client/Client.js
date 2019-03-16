import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import propTypes from "prop-types";
import Profile from "./profile/Profile";
import Appointment from "./appointment/Appointment";
import Line from "./line/Line";
import Dashboard from "./dashboard/Dashboard";
import Newsfeed from "./newsfeed/Newsfeed";
import SideBar from "../navbar/SideBar";
import Header from "../navbar/Header";
import Login from "../login/Login";

class Client extends React.Component {
  render() {
    return (
      <section id="client">
        {this.props.showLogin ? null : <Header />}
        <Route
          path="/login"
          render={() =>
            this.props.showLogin ? <Login /> : <Redirect to="/profile" />
          }
        />

        <div className="client-container">
          {this.props.showLogin ? null : (
            <SideBar handleLogin={this.props.handleLogin} />
          )}

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

Client.propTypes = {
  showLogin: propTypes.bool.isRequired,
  handleLogin: propTypes.func.isRequired
};

Client.defaultProps = {
  showLogin: false
};
export default Client;
