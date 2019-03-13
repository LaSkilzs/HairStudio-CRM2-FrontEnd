import React from "react";
import Calendar from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = Calendar.momentLocalizer(moment);

const DnDCalendar = withDragAndDrop(Calendar);

class BigCalendar extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [
        {
          start: new Date(),
          end: new Date(moment().add(1, "days")),
          title: "Some title"
        }
      ]
    };
  }
  render() {
    return (
      <DnDCalendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={this.state.events}
        onEventDrop={this.onEventDrop}
        onEventResize={this.onEventResize}
        resizable
        style={{ height: "100vh", marginLeft: "280px" }}
      />
    );
  }
}

export default BigCalendar;
