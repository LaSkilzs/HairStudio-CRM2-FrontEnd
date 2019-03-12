import React from "react";
import Title from "../components/Title";

const TestimonialQuotes = props => {
  return (
    <div className="testimonial-center">
      <Title name={"Testimonials"} />
      <article>
        <img
          src="https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="pic"
        />
        <blockquote>
          <p>
            <i className="fa fa-quote-left" /> Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
          <footer>-customer</footer>
        </blockquote>
      </article>
    </div>
  );
};

export default TestimonialQuotes;
