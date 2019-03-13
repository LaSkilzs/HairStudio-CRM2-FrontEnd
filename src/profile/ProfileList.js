import React from "react";
import AppointmentCard from "./AppointmentCard";
import HairCard from "./HairCard";
import ProfileCard from "./ProfileCard";

class ProfileList extends React.Component {
  render() {
    return (
      <div className="profile-list">
        <ProfileCard />
        <AppointmentCard />
        <HairCard />
      </div>
    );
  }
}

export default ProfileList;
