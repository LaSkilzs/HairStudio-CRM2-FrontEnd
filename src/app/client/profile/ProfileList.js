import React from "react";
import AppointmentCard from "./AppointmentCard";
import HairCard from "./HairCard";
import ProfileCard from "./ProfileCard";
import propTypes from "prop-types";

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

ProfileList.propTypes = {
  user: propTypes.object.isRequired,
  appointments: propTypes.array.isRequired,
  haircard: propTypes.array.isRequired,
  profile: propTypes.array.isRequired
};

ProfileList.defaultProps = {
  user: {},
  appointments: [{}],
  haircard: [{}],
  profile: [{}]
};

export default ProfileList;
