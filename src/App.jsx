import React from "react";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Frontend from "./components/frontend-toolbox/Frontend";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/toolbox"
            element={
              <>
                <Frontend />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
