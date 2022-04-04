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
          My name is Marcos Martinez. I'm a young Developer just getting started
          on my journey. As a kid growing up you see a lot of things. For me
          homeless people, fighting, crime, was an everyday thing. Now what I
          took from this was that I could be the diamond in the dirt. The first
          of my y family to make it out. Not only from the hood, but to be set
          for life and not worry about any bills. Now this is not the only
          reason Im hungry, its hard to see your mom have goals and aspirations
          that shes not able to complete because she had kids and is a single
          mother. Also a sister that has a disability that will soon alter her
          life forever. This means I have to step up to the plate and provide
          for them both, they are the ones im going on this journey for.
        </p>
      </div>
      <div>
        <h2>Where Im from</h2>
        <p></p>
      </div>
    </div>
  );
};

export default About;
