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
      <div>
        <h1>Appointment here!</h1>
        <BigCalendar events={this.state.events} />
      </div>
    );
  }
}

export default Appointment;
