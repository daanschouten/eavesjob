const React = require('react');
const PropTypes = require('prop-types');
const { NavLink } = require('react-router-dom');

export default function Header(props) {
  return (
    <header>
      <div id="menu-left">
        <NavLink exact to="/"><h2> Eavesjob </h2></NavLink>
      </div>
      <div id="menu-right">
        <NavLink to="/support">Support</NavLink>
        <NavLink to="/browse">Browse</NavLink>
        <NavLink to="/profile">My Profile</NavLink>
      </div>
      <div id="menu-mobile">
        <NavLink exact to="/"><h2> Eavesjob </h2></NavLink>
        <NavLink to="/support">Support</NavLink>
        <NavLink to="/browse">Browse</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>
    </header>
  )
}
