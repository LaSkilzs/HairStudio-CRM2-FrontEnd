import React from "react";
import "../website/welcome.css";

const Footer = props => {
  return (
    <footer className="main-footer">
      <div className="footer-text">
        <h3>Copyright &copy; 2019 All rights reserved</h3>
      </div>
      <div className="footer-icons">
        <a href="##">
          <i className="fab fa-facebook" />
        </a>
        <a href="##">
          <i className="fab fa-instagram" />
        </a>
        <a href="##">
          <i className="fab fa-twitter" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
