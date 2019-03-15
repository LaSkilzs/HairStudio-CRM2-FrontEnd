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
        </div>

        <ul className="appointment-facts">
          <li className="lastwash">
            Next Appointment: {props.next_appointment}
          </li>
          <li className="lastwash">Last Wash: {props.last_wash}</li>
          <li className="lastperm">Last Perm: {props.last_perm}</li>
          <li className="lastdyes">Last Rinse/Dye: {props.last_dyes}</li>
          <li className="lastdyes">Stylist: {props.stylist}</li>
        </ul>
        <div className="btn-group">
          <button className="profile-btn">Book Today </button>
          <button className="profile-btn"> Edit </button>
        </div>
      </div>
    </div>
  );
};

AppointmentCard.propTypes = {
  next_appointment: propTypes.string.isRequired,
  last_wash: propTypes.string.isRequired,
  last_perm: propTypes.string.isRequired,
  last_dyes: propTypes.string.isRequired,
  stylist: propTypes.string.isRequired
};
AppointmentCard.defaultProps = {
  next_appointment: "unknown",
  last_wash: "unknown",
  last_perm: "unknown",
  last_dyes: "unknown",
  stylist: "Lead Stylist"
};

export default AppointmentCard;
