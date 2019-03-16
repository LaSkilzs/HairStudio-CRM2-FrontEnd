import React from "react";
import propTypes from "prop-types";

const ContactCard = props => {
  return (
    <React.Fragment>
      <h3>{props.comp}</h3>
      <p>{props.address}</p>
      <p>{props.city}</p>
      <p>{props.zip}</p>
    </React.Fragment>
  );
};

ContactCard.propTypes = {
  comp: propTypes.string.isRequired,
  address: propTypes.string.isRequired,
  city: propTypes.string.isRequired,
  state: propTypes.string.isRequired,
  zip: propTypes.number.isRequired
};
ContactCard.defaultProps = {
  comp: "Find Us Here",
  address: "1234 Salon Blvd",
  city: "Curly",
  state: "New Jersey",
  zip: parseInt("09873")
};

export default ContactCard;
