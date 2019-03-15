import React from "react";
import Table from "./Table";
import ProfileList from "./ProfileList";

class Profile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="profile-container">
          <ProfileList />
          <Table />
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
