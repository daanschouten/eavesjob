const React = require('react');
const PropTypes = require('prop-types');
const Header = require('../header').Header;
const RegisterForm = require('../auth').RegisterForm;

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.redirectMember = this.redirectMember.bind(this);
    this.state = {
      loggedIn: false
    };
  }
  redirectMember() {
    location.href = '/login';
  }

  render() {
    return (
      <div id="react-main">
        <Header loggedIn={this.props.loggedIn}/>
        <div id="wrapper-single">
          <RegisterForm marginTop={0}/>
          <div className="single-center">
            <div className="form-redirect">
            <h2>Already a Member? </h2>
            <button onClick= {this.redirectMember} className="big-button">Login</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = {
  Register: Register
}
