import React from "react";
import "./hero.css";
import me from "../../assets/me.jpeg";
import { RESUME_URL } from "../../config/resume";

const Hero = () => {
  return (
    <div className="firstSection">
      <div className="fsWrap">
        <div className="fsText" id="particles-js">
          <div className="fsTextWrap">
            <h3>Welcome to my digital space!</h3>
            <h1>I'm Marcos Martinez</h1>
            <div className="fstyping">
              <span className="fsTextType first-text">A Passionate </span>
              <span className="fsTextType sec-text">Web Developer</span>
            </div>
            <p>
              Take a journey through my portfolio and discover the intersection
              of creativity and craftsmanship.
            </p>
            <div className="fsSMCon">
              <a href="https://github.com/marcosamartinez" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="bx bxl-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="https://twitter.com/MarcosMart2001" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="https://www.instagram.com/marcosmartinz2001" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="bx bxl-instagram-alt"></i>
              </a>
            </div>
            {RESUME_URL ? (
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" id="dcvbtn">
                View Resume
              </a>
            ) : (
              <a href="/resume" id="dcvbtn">
                View Resume
              </a>
            )}
          </div>
        </div>
        <div className="fsIMGCon">
          <div className="fsimgWrap">
            <img src={me} alt="Marcos Martinez" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
