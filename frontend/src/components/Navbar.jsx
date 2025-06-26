import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import this
import logo from '../assets/logo.jpg';
import './Navbar.css';
import profile from '../assets/profile.jpg';


export default function Navbar() {
  const navigate = useNavigate(); // ✅ Initialize
  //  navigate
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
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNavbar ? 'show' : 'hide'}`}>
      <img
  src={logo}
  alt="Company Logo"
  className="navbar-logo"
  onClick={() => navigate('/')}
  style={{ cursor: 'pointer' }}
/>

<ul className="navbar-links">
  <li onClick={() => navigate('/about')}>About</li>
  <li onClick={() => navigate('/service')}>Services</li>
  <li onClick={() => navigate('/blog')}>Blog</li>
  <li onClick={() => navigate('/Portfolio')}>Portfolio</li>
  <li onClick={() => navigate('/careers')}>Careers</li>
  <li onClick={() => navigate('/quote')}>Get a Quote</li>
  <li>
    <button
      className="call-button"
      onClick={() => navigate('/meeting')}
    >
      Schedule a Call Now
    </button>
  </li>
  <li>
    <img
      src={profile}
      alt="Profile"
      className="navbar-profile"
      onClick={() => navigate('/dashboard')}
    />
  </li>
</ul>

    </nav>
  );
}
