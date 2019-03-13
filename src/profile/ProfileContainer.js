import React from "react";
import TableHead from "./TableHead";
import ProfileList from "./ProfileList";

class Profile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="profile-container">
          <ProfileList />
          <TableHead />
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
