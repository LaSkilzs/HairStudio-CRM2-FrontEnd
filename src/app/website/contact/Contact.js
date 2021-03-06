import React from "react";
import ContactMap from "../contact/ContactMap";
import ContactForm from "../contact/ContactForm";
import Title from "../../../components/Title";
import "../../../css/welcome.css";

class Contact extends React.Component {
  render() {
    return (
      <section id="contact">
        <Title name="Contact Us" />
        <div className="contact-container">
          <ContactMap />
          <ContactForm />
        </div>
      </section>
    );
  }
}

export default Contact;
