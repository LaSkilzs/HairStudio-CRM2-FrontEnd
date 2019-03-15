import React from "react";
import Calendar from "react-big-calendar";
import moment from "moment";
import propTypes from "prop-types";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = Calendar.momentLocalizer(moment);

const DnDCalendar = withDragAndDrop(Calendar);

class BigCalendar extends React.Component {
  render() {
    return (
      <DnDCalendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={this.props.events}
        onEventDrop={this.onEventDrop}
        onEventResize={this.onEventResize}
        resizable
        style={{ height: "100vh" }}
      />
    );
  }
}

BigCalendar.propTypes = {
  events: propTypes.array.isRequired
};
BigCalendar.defaultProps = {
  events: {
    start: new Date(),
    end: new Date(moment().add(1, "days")),
    title: "Some title"
  }
};

export default BigCalendar;
