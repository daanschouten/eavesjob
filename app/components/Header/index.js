const React = require('react');
const PropTypes = require('prop-types');
const { NavLink } = require('react-router-dom');

class MenuLoggedIn extends React.Component {
  render() {
    return (
      <div id="menu">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/support">Support</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/profile">My Profile</NavLink>
      </div>
    )
  }
}

class MenuNotLoggedIn extends React.Component {
  render() {
    return (
      <div id="menu">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/support">Support</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/register">Sign Up</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    )
  }
}

const Menu = function(props) {
  if (props.user._id) {
    return <MenuLoggedIn/>;
  }
  return <MenuNotLoggedIn/>;
}

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <div id="logo">
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/browse">Browse</NavLink>
        </div>
        <Menu user={this.props.user}/>
      </header>
    )
  }
}
