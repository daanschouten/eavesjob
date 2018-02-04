const React = require('react');
const PropTypes = require('prop-types');
const { NavLink } = require('react-router-dom');

export default function Support(props) {
  return (
    <div id="two-thirds-page">
      <div className="right-sidebar">
        <div id="monitored-websites">
          <div id="sidebar-nav">
            <NavLink to="/"> Getting Started </NavLink>
            <NavLink to="/"> Subscribe to Career Pages </NavLink>
            <NavLink to="/"> Receiving Emails </NavLink>
            <NavLink to="/"> Request new Career Pages </NavLink>
            <NavLink to="/"> Modify existing Career Pages </NavLink>
            <NavLink to="/"> Go Premium </NavLink>
          </div>
        </div>
      </div>
      <div id="two-thirds-left">
        <div id="website-list">
          <p> Hello big </p>
        </div>
      </div>
    </div>
  )
}
