import React from "react";
import ContactMap from "../components/ContactMap";
import ContactForm from "../components/ContactForm";
import Title from "../components/Title";
import "../website/welcome.css";

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
