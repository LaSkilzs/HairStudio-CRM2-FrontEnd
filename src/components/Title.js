import React from "react";
import "../App.css";

const Title = ({ name }) => {
  return (
    <div className="title-container">
      <div className="title-text">
        <h1>{name}</h1>
      </div>
      <div className="title-underline" />
    </div>
  );
};
export default Title;
