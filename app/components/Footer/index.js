const React = require('react');
const PropTypes = require('prop-types');
const { NavLink } = require('react-router-dom');

export default function Footer(props) {
  return (
    <footer>

        <div className="footer-column">
          <h1> EAVESJOB </h1>
        </div>

        <div className="footer-column">
          <h4> GENERAL </h4>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/support">Support</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/support">Contact</NavLink>
        </div>

        <div className="footer-column">
          <h4> PERSONAL </h4>
          <NavLink to="/browse">Browse</NavLink>
          <NavLink to="/profile">My Profile</NavLink>
          <NavLink to="/premium">Go Premium</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>

        <div className="footer-column">
          <h4> FORMAL </h4>
          <NavLink to="/terms">Terms and Conditions</NavLink>
          <NavLink to="/businesses">Businesses</NavLink>
        </div>
    </footer>
  )
}
