import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Get in Touch</h2>
      <p className="contact-intro">Reach out for collaborations, opportunities, or just to say hi.</p>

      <div className="contact-details">
        <section className="contact-block">
          <h3>Email</h3>
          <a href="mailto:marcosmartinz176@gmail.com">marcosmartinz176@gmail.com</a>
        </section>

        <section className="contact-block">
          <h3>Social</h3>
          <div className="contact-links">
            <a href="https://github.com/marcosamartinez" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-github"></i> GitHub
            </a>
            <a href="https://twitter.com/MarcosMart2001" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-twitter"></i> Twitter
            </a>
            <a href="https://www.instagram.com/marcosmartinz2001" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-instagram-alt"></i> Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-linkedin"></i> LinkedIn
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-facebook"></i> Facebook
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
