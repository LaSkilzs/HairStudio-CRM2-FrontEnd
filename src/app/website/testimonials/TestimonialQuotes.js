import React from "react";
import propTypes from "prop-types";
import Title from "../../../components/Title";

const TestimonialQuotes = props => {
  return (
    <div className="testimonial-center">
      <Title name={"Testimonials"} />
      <article>
        <img src={props.avatar} alt="pic" />
        <blockquote>
          <p>
            <i className="fa fa-quote-left" /> {props.quote}.
          </p>
          <footer>-customer</footer>
        </blockquote>
      </article>
    </div>
  );
};

TestimonialQuotes.propTypes = {
  avatar: propTypes.string.isRequired,
  quote: propTypes.string.isRequired
};
TestimonialQuotes.defaultProps = {
  avatar:
    "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  quote: "Lorem ipsum dolor sit ametconsectetur adipisicing elit."
};

export default TestimonialQuotes;
