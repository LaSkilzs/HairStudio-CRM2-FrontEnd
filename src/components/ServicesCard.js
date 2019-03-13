import React from "react";

const ServicesCard = () => {
  return (
    <React.Fragment>
      <article className="service-item">
        <i className="fas fa-ruler-horizontal" />
        <div className="service-title">
          <ul className="service-list" />
          <li>service type name</li>
          <button className="service-button">Book Today</button>
        </div>
      </article>
    </React.Fragment>
  );
};

export default ServicesCard;
