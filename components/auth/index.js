const React = require('react');
const PropTypes = require('prop-types');

const { RegisterForm } = require('../Forms');
const { LoginForm } = require('../Forms');
import Redirect from '../Redirect';

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
          <Redirect destination ='/login' title='Already a Member?' message='Login' />
        </div>
      </div>
    )
  }
}

module.exports = {
  Register: Register,
  Login: Login
}
