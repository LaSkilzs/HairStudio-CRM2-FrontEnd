import React from "react";

const ProfileCard = props => {
  return (
    <div className="profile-card">
      <div className="card">
        <div className="last-appointment">Date</div>
        <div className="more">
          <i className="fa fa-info-circle" />
        </div>

        <div className="appointment">
          <i className="fas fa-calendar-check" />
          <h4>Nothing Scheduled</h4>
          <button className="profile-btn">See More</button>
        </div>

        <ul className="appointment-facts">
          <li className="lastwash">Last Wash:</li>
          <li className="lastperm">Last Perm:</li>
          <li className="lastdyes">Last Rinse/Dye:</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
