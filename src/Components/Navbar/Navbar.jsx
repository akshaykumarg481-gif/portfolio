import React, { useState, useContext } from "react";
import "./Navbar.css";
import { IoSunnyOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";
import profile from "/src/assets/sky.png";
const Navbar = () => {

  const { theme, setTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar">

      <div className="logo"><img src={profile} className="photo1"/></div>

      {/* Hamburger */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <ul className="nav-list">
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        </ul>

        <div className="mobile-extra">
          <a href="#contact" className="about-btn" onClick={closeMenu}>
            Contact Me
          </a>

          <button className="theme" onClick={toggleTheme}>
            <IoSunnyOutline />
          </button>
        </div>

      </div>

    </div>
  );
};

export default Navbar;