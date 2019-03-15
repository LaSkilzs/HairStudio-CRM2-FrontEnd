import React from "react";
import propTypes from "prop-types";

const ServicesCard = props => {
  return (
    <React.Fragment>
      <article className="service-item">
        <i className="fas fa-ruler-horizontal" />
        <div className="service-title">
          <h2>{props.service}</h2>
          <ul className="service-list" />
          <li>{props.name}</li>
          <button className="service-button">Book Today</button>
        </div>
      </article>
    </React.Fragment>
  );
};

ServicesCard.propTypes = {
  service: propTypes.string.isRequired,
  name: propTypes.string.isRequired
};
ServicesCard.defaultProps = {
  service: "Hair Service",
  name: "basic service"
};

export default ServicesCard;
