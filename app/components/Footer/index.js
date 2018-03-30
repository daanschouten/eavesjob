import React from 'react';
const { NavLink } = require('react-router-dom');

export default function Footer(props) {
  return (
    <footer>

        <div className="footer-column">
          <h1> Eavesjob </h1>
        </div>

        <div className="footer-column">
          <h4> GENERAL </h4>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/support">Support</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="footer-column">
          <h4> PERSONAL </h4>
          <NavLink to="/browse">Browse</NavLink>
          <NavLink to="/profile">My Profile</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>

        <div className="footer-column">
          <h4> FORMAL </h4>
          <NavLink to="/premium">Go Premium</NavLink>
          <NavLink to="/conditions">Terms and Conditions</NavLink>
          <NavLink to="/business">Businesses</NavLink>
        </div>
    </footer>
  )
}
