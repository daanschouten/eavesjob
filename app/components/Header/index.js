const React = require('react');
const PropTypes = require('prop-types');
const { NavLink } = require('react-router-dom');

export default function Header(props) {
  return (
    <header>
      <div id="logo">
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/browse">Browse</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div id="menu">
        <NavLink to="/support">Support</NavLink>
        <NavLink to="/profile">My Profile</NavLink>
      </div>
    </header>
  )
}
