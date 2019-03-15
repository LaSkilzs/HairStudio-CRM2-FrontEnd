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
        <BigCalendar events={this.state.events} />
      </div>
    );
  }
}

export default Appointment;
