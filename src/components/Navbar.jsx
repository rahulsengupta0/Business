import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.jpg';
import './Navbar.css';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      const currentScrollY = window.scrollY;

      timeoutId = setTimeout(() => {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowNavbar(false); // hide on scroll down
        } else {
          setShowNavbar(true); // show on scroll up
        }
        setLastScrollY(currentScrollY);
      }, 100); // debounce duration
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNavbar ? 'show' : 'hide'}`}>
      <img src={logo} alt="Company Logo" className="navbar-logo" />
      <ul className="navbar-links">
        <li>About</li>
        <li>Services</li>
        <li>Blog</li>
        <li>Portfolio</li>
        <li>Careers</li>
        <li>Get a Quote</li>
        <li><button className="call-button">Schedule a Call Now</button></li>
      </ul>
    </nav>
  );
}
