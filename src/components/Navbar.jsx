import React, { useState } from 'react';
// import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>MySite</h1>
      </div>
      <ul className={`nav-links ${isMobile ? 'mobile' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">Categories</a></li>
        <li><a href="/services">Cart</a></li>
        <li><a href="/contact">Profile</a></li>
      </ul>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;
