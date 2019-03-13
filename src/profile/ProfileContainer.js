import React from "react";
import TableHead from "./TableHead";
import Head from "../components/Head";
import ProfileList from "./ProfileList";

class Profile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="profile-container">
          <Head />
          <ProfileList />
          <TableHead />
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
