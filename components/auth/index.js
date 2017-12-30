const React = require('react');
const PropTypes = require('prop-types');

const { RedirectMember } = require('../Redirect');

class Login extends React.Component {
  render() {
    return (
      <div className="container-single">
        <div className="container-center">
          <div className="single">
            <div className="form-title">
              <h1>Log in</h1>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}

class LoginForm extends React.Component {
  render() {
    return (
        <form method="POST" action="/login" className="form-small">
          <div className="form-group">
            <input type="text" id="email" placeholder="Your Email Address" name="email" className="big-input"/>
          </div>
          <div className="form-group">
            <input type="password" id="password" placeholder="Your Password" name="password" className="big-input"/>
          </div>
          <div className="form-group">
            <button type="submit" className="big-button">Log in</button>
          </div>
        </form>
    );
  }
}

class Register extends React.Component {
  render() {
    return (
      <div className ="container-single">
        <div className ="container-center">
          <div className ="single">
            <div className="form-title">
              <h1>Join us! </h1>
            </div>
            <RegisterForm/>
          </div>
          <RedirectMember/>
        </div>
      </div>
    )
  }
}

class RegisterForm extends React.Component {
  render() {
    return (
        <form method="POST" action="/register" className="form-small">
          <div className="form-group">
            <input type="text" placeholder="First Name" name="firstName" className="big-input half"/>
            <input type="text" placeholder="Last Name" name="lastName" className="big-input half"/>
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email Address" name="email" className="big-input"/>
          </div>
          <div className="form-group">
            <input type="password" name="password" placeholder="Password" className="big-input half"/>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" className="big-input half"/>
          </div>
          <div className="form-group">
            <button type="submit" className="big-button">Sign up</button>
          </div>
        </form>
    )
  }
}

module.exports = {
  Register: Register,
  Login: Login
}
