import React from "react";
import "./about.css";
import me from "./../../assets/me.jpeg";
import skyline5 from "./../../assets/skyline5.jpeg";

const About = () => {
  // Styled Componentes

  return (
    <div className="about-page">
      <div className="about-me">
        <h2>About Me</h2>
        <img className="marcos-picture" src={me} alt="marcos martinez" />
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
      <div className="where-im-from">
        <h2>Concreate Jungle</h2>
        <img className="new-york" src={skyline5} alt="new york" />
        <p>
          {" "}
          Im from New York City. Washington Heights exactly where you see a lot
          of dreams float in the air. Music, Food, Family, Culture is what
          describes this place, just flowing with colors everywhere. Even though
          New York is big, this is a hot spot for hispanics from the Dominican
          Republic to come.
        </p>
      </div>
    </div>
  );
};

export default About;
