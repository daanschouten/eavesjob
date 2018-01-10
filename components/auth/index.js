const React = require('react');
const PropTypes = require('prop-types');

const { RegisterForm } = require('../Forms');
const { LoginForm } = require('../Forms');
import HandleRedirect from '../Redirect';

function Login(props) {
  return (
    <div className="container-single">
      <div className="container-center">
        <div className="single">
          <div className="form-title">
            <h1>Log in</h1>
          </div>
          <LoginForm handleLogin = {props.handleLogin}/>
        </div>
        <HandleRedirect destination ='/register' title='Not yet Member?' message='Sign Up' />
      </div>
    </div>
  );
}

function Register(props) {
    return (
      <div className ="container-single">
        <div className ="container-center">
          <div className ="single">
            <div className="form-title">
              <h1>Join us! </h1>
            </div>
            <RegisterForm/>
          </div>
          <HandleRedirect destination ='/login' title='Already a Member?' message='Login' />
        </div>
      </div>
    )
}

module.exports = {
  Register: Register,
  Login: Login
}
