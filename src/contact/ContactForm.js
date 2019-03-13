import React from "react";
import ContactDetail from "../forms/ContactDetail";
import ContactCard from "./ContactCard";

const ContactForm = props => {
  return (
    <React.Fragment>
      <div className="contact-right">
        <article className="contact-info">
          <div className="contact-detail">
            <div className="contact-icon">
              <i className="fas fa-phone" />
            </div>
          </div>
          <div className="contact-text">
            <ContactCard />
          </div>
        </article>
        <div className="form-container">
          <ContactDetail />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactForm;
