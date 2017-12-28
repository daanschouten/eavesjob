const React = require('react');
const PropTypes = require('prop-types');
const { NavLink } = require('react-router-dom');

class MenuLoggedIn extends React.Component {
  render() {
    return (
      <div id="menu">
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/profile">My Profile</NavLink>
      </div>
    )
  }
}

class MenuNotLoggedIn extends React.Component {
  render() {
    return (<div id="menu">
      <NavLink to="/contact">Contact</NavLink>
      <NavLink id="header-sign-up" to="/register">Sign Up</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>)
  }
}

const Menu = function(props) {
  const loggedIn = props.loggedIn;
  if (loggedIn) {
    return <MenuLoggedIn/>;
  }
  return <MenuNotLoggedIn/>;
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <div id="logo">
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/browse">Browse</NavLink>
          <NavLink to="/support">Support</NavLink>
        </div>
        <Menu loggedIn={this.props.loggedIn}/>
      </header>
    )
  }
}

module.exports = {
  Header: Header
}
