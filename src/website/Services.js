import React from "react";
import ServicesCard from "../services/ServicesCard";
import Title from "../components/Title";
import "../website/welcome.css";

class Services extends React.Component {
  constructor() {
    super();
    this.state = { name: "Services" };
  }
  render() {
    return (
      <section id="services">
        <Title name={this.state.name} />
        <div className="services-container">
          <ServicesCard />
        </div>
      </section>
    );
  }
}

export default Services;
