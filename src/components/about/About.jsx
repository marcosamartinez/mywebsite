import React from "react";
import "./about.css";
import aboutHeadshot from "../../assets/about-headshot.png";
import skyline5 from "../../assets/skyline5.jpeg";

const About = () => {
  // Styled Componentes

  return (
    <div className="about-page">
      <div className="about-me">
        <h2>About Me</h2>
        <img className="marcos-picture" src={aboutHeadshot} alt="Marcos Martinez" />
        <p>
        As a dev I want to express my Love for Technology! Tackling any task that comes forward from debugging to pushing out a component to millions of people. I'm a person that will see things to the end. Until its built in the most efficient way I will not stop working towards it. Creating a website that's beautiful not only in the front end but also in the back end. Working on ways for both ends to verify its the correct person logging in also making it run smooth with the best user experience. 

My story is very uncommon in the tech field. I'm a kid that grew up with a family that lived check to check. Always had the special moments but never lived lavish. I want to be the first person to reach financial freedom also retire my mom. This carrier will help me not only reach my goal's but help other people that are interested in tech. With all kinds of things like what to focus on, which paths to take, how to stop distractions and someone to talk. 


        </p>
      </div>
      <div className="where-im-from">
        <h2>Concreate Jungle</h2>
        <img className="new-york" src={skyline5} alt="New York City" />
        <p>
          {" "}
          Im from New York City. Washington Heights exactly where you see a lot
          of dreams float in the air. Music, Food, Family, Culture is what
          describes this place, just flowing with colors everywhere. Even though
          New York is big, this is a hot spot for hispanics from the Dominican
          Republic to come. This is the place I call home. Where I was molded into the person I am today.
        </p>
      </div>
    </div>
  );
};

export default About;
