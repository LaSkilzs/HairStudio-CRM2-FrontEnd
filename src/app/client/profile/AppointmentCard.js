import React from "react";
import propTypes from "prop-types";

const AppointmentCard = props => {
  return (
    <div className="profile-card">
      <div className="card">
        <div className="more">
          <i className="fa fa-info-circle" />
        </div>

        <div className="appointment">
          <i className="fas fa-calendar-check" />
          <h4>Nothing Scheduled</h4>
          <button className="profile-btn">Book Today</button>
        </div>

        <ul className="appointment-facts">
          <li className="lastwash">
            Last Appointment: {props.last_appointment}
          </li>
          <li className="lastwash">Last Wash: {props.last_wash}</li>
          <li className="lastperm">Last Perm: {props.last_perm}</li>
          <li className="lastdyes">Last Rinse/Dye: {props.last_dyes}</li>
        </ul>
      </div>
    </div>
  );
};

AppointmentCard.propTypes = {
  last_appointment: propTypes.string.isRequired,
  last_wash: propTypes.string.isRequired,
  last_perm: propTypes.string.isRequired,
  last_dyes: propTypes.string.isRequired
};

AppointmentCard.defaultProps = {
  last_appointment: "unknown",
  last_wash: "unknown",
  last_perm: "unknown",
  last_dyes: "unknown"
};

export default AppointmentCard;
