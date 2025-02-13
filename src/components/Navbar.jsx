import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/carlscars.png";

function CustomNav() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">
          <img id="logo" src={logo} alt="Carl's Cars Logo" />
        </NavLink>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/mechanics" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Mechanics
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Services
          </NavLink>
        </li>
        <li>
          <a href="#contact-section" onClick={scrollToContact}>
            Contact
          </a>
        </li>
        <li className="book-online">
          <NavLink to="/book" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Book Online
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default CustomNav;