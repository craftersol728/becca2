//import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo.png'

const NavBar = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos === 0;


      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  
  return (
    <div className={`nav-bar ${visible ? '' : 'hide'}`}>
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
