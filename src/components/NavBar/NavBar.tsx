//import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo.png'

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="container">
      <div className="nav-elements">
      {/* <div className="logo">
          <Logo />
        </div> */}
          <ul>
          <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''}>Gallery/Testimonials</NavLink>
            </li>
            <li>
              <NavLink to="/faq" className={({ isActive }) => isActive ? 'active' : ''}>FAQ</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact/Booking</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
