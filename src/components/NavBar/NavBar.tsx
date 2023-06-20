import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Icon</NavLink>
      <NavLink to="/about-us" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink>
      <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink>
      <NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''}>Gallery/Testimonials</NavLink>
      <NavLink to="/faq" className={({ isActive }) => isActive ? 'active' : ''}>FAQ</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact/Booking</NavLink>
    </div>
  )
}

export default NavBar;
