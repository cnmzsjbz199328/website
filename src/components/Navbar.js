import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../logo/Logo';
import Weather from '../weather/Weather';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo postLogoId ={14}/>
      <ul className="navbar-menu">
        <li><Link to="/components">Home</Link></li>
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