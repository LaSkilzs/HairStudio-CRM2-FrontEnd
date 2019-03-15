import React, { Component } from "react";

class ContactDetail extends Component {
  render() {
    return (
      <React.Fragment>
        <form className="contactform">
          <h3>contact us</h3>
          <input
            type="text"
            className="contact-inputs"
            placeholder="Enter name..."
            name="name"
          />
          <input
            type="email"
            className="contact-inputs"
            placeholder="Enter email..."
            name="email"
          />
          <textarea
            name="message"
            className="contact-message"
            cols="30"
            rows="10"
            placeholder="Your message..."
          />
          <button type="button">Submit Message</button>
        </form>
      </React.Fragment>
    );
  }
}

export default ContactDetail;
