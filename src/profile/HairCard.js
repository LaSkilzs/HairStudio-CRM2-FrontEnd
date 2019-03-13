import React from "react";

const HairCard = props => {
  return (
    <div className="profile-card">
      <div className="card">
        <div className="more">
          <i className="fa fa-info-circle" />
        </div>

        <div className="appointment">
          <i className="fas fa-cut" />
          <h4>Hair Card</h4>
        </div>

        <ul className="appointment-facts">
          <li className="facts">Hair is:</li>
          <li className="facts">Hair type:</li>
          <li className="facts">Hair Length:</li>
          <li className="facts">last_time_colored:</li>
          <li className="facts">have_a_perm_or_relaxer:</li>
        </ul>
        <div className="btn-group">
          <button className="profile-btn">See More</button>
          <button className="profile-btn">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default HairCard;
