import React from "react";
import "./about.css";
import me from "./../../assets/me.jpeg";

const About = () => {
  return (
    <div className="aboutme">
      <div>
        <img src={me} alt="marcos martinez" />
      </div>
      <div>
        <h2>About Me</h2>
        <p>
          My name is Marcos. I'm a young Developer just getting started on my
          journey.
        </p>
      </div>
    </div>
  );
};

export default About;
