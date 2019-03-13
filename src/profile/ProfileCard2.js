import React from "react";

const ProfileCard2 = props => {
  return (
    <div className="profile-card">
      <div className="card">
        <div className="box">
          <div className="img">
            <img
              src="https://images.pexels.com/photos/1897590/pexels-photo-1897590.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=125&w=250"
              alt="pic"
            />
          </div>
          <h2>
            Full Name
            <br />
            <span>Hair Personality</span>
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
          </h2>
          <div className="profile-butn">
            <button>edit</button>
            <button>create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard2;
