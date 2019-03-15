import React from "react";
import propTypes from "prop-types";

const ProfileCard = props => {
  return (
    <div className="profile-card">
      <div className="card">
        <div className="top-section" />
        <div className="avatar">
          <img src={props.avatar} alt="pic" />
        </div>
        <div className="bottom-section">
          <h1>{props.fullName}</h1>
          <h3>{props.personality}</h3>
          <p>{props.summary}</p>
        </div>
        <ul className="profile-ul">
          <li>
            <a href="##">
              <i className="fab fa-facebook" />
            </a>
          </li>
          <li>
            <a href="##">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="##">
              <i className="fab fa-twitter" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  avatar: propTypes.string.isRequired,
  fullName: propTypes.string.isRequired,
  personality: propTypes.string.isRequired,
  summary: propTypes.string.isRequired
};
ProfileCard.defaultProps = {
  avatar:
    "https://images.pexels.com/photos/1897590/pexels-photo-1897590.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100",
  fullName: "User FullName",
  personality: "User Hair Personality",
  summary: "Hair Personality Brief Summary"
};

export default ProfileCard;
