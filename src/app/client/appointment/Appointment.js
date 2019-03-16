import React from "react";
import BigCalendar from "./BigCalendar";

class Appointment extends React.Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }
  render() {
    return (
      <React.Fragment>
        <BigCalendar events={this.state.events} />
      </React.Fragment>
    );
  }
}

export default Appointment;
