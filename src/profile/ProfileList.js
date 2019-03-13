import React from "react";
import ProfileCard from "./ProfileCard";
import ProfileCard2 from "./ProfileCard2";

class ProfileList extends React.Component {
  render() {
    return (
      <div className="profile-list">
        <ProfileCard2 />
        <ProfileCard />
        <ProfileCard />
      </div>
    );
  }
}

export default ProfileList;
