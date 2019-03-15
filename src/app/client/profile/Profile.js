import React from "react";
import ProfileContainer from "../profile/ProfileContainer";
import "../profile/profile.css";

class Profile extends React.Component {
  render() {
    return (
      <section id="profile">
        <ProfileContainer />
      </section>
    );
  }
}

export default Profile;
