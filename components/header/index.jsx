const React = require('react');
const PropTypes = require('prop-types');

class MenuLoggedIn extends React.Component {
  render() {
    return (<div id="menu">
      <a href="/contact">Contact</a>
      <a href="/profile">My Profile</a>
    </div>)
  }
}

class MenuNotLoggedIn extends React.Component {
  render() {
    return (<div id="menu">
      <a href="/contact">Contact</a>
      <a id="header-sign-up" href="/register">Sign Up</a>
      <a href="/login">Login</a>
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
    return (<header>
      <div id="logo">
        <a href="/">Home</a>
        <a href="/browse">Browse</a>
        <a href="/support">Support</a>
      </div>
      <Menu loggedIn={this.props.loggedIn}/>
    </header>)
  }
}

module.exports = {
  Header: Header
}
