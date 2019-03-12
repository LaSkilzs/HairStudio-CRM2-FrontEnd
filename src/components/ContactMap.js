import React from "react";
import ContactCard from "../components/ContactCard";

const ContactMap = props => {
  return (
    <React.Fragment>
      <div className="contact-left">
        <article className="contact-info">
          <div className="contact-detail">
            <div className="contact-icon">
              <i className="fas fa-home" />
            </div>
          </div>
          <div className="contact-text">
            <ContactCard />
          </div>
        </article>
        <div className="form-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.3812056508204!2d-74.42778684909496!3d40.62147437924044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ba1fb2ca1f0b%3A0x6b243949fbc6052e!2s41+Chatham+St%2C+North+Plainfield%2C+NJ+07060!5e0!3m2!1sen!2sus!4v1552416725061"
            title="maps"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactMap;
