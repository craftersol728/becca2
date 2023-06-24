// import React from 'react';
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Hamburger } from '../../../public/assets/Hamburger_icon.svg.png'
import { ReactComponent as Brand } from '../../../public/assets/Logo.png'

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <div className="nav-bar">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
      </div>

      <div className={`nav-elements  ${showNavbar && 'active'}`}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Icon
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active' : '')}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active' : '')}>
              Gallery/Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" className={({ isActive }) => (isActive ? 'active' : '')}>
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
              Contact/Booking
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
