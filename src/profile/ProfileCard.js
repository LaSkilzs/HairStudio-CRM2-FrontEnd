import React from "react";

const ProfileCard = props => {
  return (
    <div className="profile-card">
      <div className="card">
        <div className="top-section" />
        <div className="avatar">
          <img
            src="https://images.pexels.com/photos/1897590/pexels-photo-1897590.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100"
            alt="pic"
          />
        </div>
        <div className="bottom-section">
          <h1>Full Name</h1>
          <h3>hair personality</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            praesentium.
          </p>
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

export default ProfileCard;
