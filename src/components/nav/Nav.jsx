import React, { useState, useEffect } from "react";
import "./nav.css";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const [navbarActive, setNavbarActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarActive(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="header_navbar">
      <div className={`hn_wrap ${navbarActive ? "navbarActive" : ""}`} id="navbar">
        <Link to="/" className="hn_Logo">
          <h1>Portfolio</h1>
        </Link>
        <div className="nav_menu">
          <ul>
            <li>
              <Link to="/" className={`hnLink ${isActive("/") && location.pathname === "/" ? "activeNH" : ""}`}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className={`hnLink ${isActive("/about") ? "activeNH" : ""}`}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/resume" className={`hnLink ${isActive("/resume") ? "activeNH" : ""}`}>
                RESUME
              </Link>
            </li>
            <li>
              <Link to="/projects" className={`hnLink ${isActive("/projects") ? "activeNH" : ""}`}>
                PROJECTS
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`hnLink ${isActive("/contact") ? "activeNH" : ""}`}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
