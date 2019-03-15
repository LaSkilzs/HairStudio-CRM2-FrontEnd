import React from "react";
import propTypes from "prop-types";

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
          <li className="facts">Hair is: {props.hair_is}</li>
          <li className="facts">Hair type: {props.hair_type}</li>
          <li className="facts">Hair Length: {props.hair_length}</li>
          <li className="facts">last_time_colored: {props.last_colored}</li>
          <li className="facts">have_a_perm_or_relaxer: {props.last_perm}</li>
        </ul>
        <div className="btn-group">
          <button className="profile-btn">See More</button>
          <button className="profile-btn">Edit</button>
        </div>
      </div>
    </div>
  );
};

HairCard.propTypes = {
  hair_is: propTypes.string.isRequired,
  hair_type: propTypes.string.isRequired,
  hair_length: propTypes.string.isRequired,
  last_colored: propTypes.string.isRequired,
  last_perm: propTypes.string.isRequired
};
HairCard.defaultProps = {
  hair_is: " unknown",
  hair_type: " unknown",
  hair_length: " unknown",
  last_colored: " unknown",
  last_perm: " unknown"
};

export default HairCard;
