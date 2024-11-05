import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../logo/Logo';
import Weather from '../weather/Weather';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={menuRef}>
      <Logo postLogoId={14} />
      <div className="navbar-toggle" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
        <li><Link to="/aboutUs">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/venueHire">Venue Hire</Link></li>
        <li><Link to="/volunteering">Volunteering</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Weather />
    </nav>
  );
};

export default Navbar;