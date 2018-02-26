import React from 'react';
import PropTypes from 'prop-types';

const {
  RegisterForm,
  LoginForm,
  ForgotPasswordForm } = require('../Forms');

const { Link } = require('react-router-dom');

function Login(props) {
  return (
    <div className="container-single">
      <div className="container-center">
        <div className="single">
          <div className="form-title">
            <h1> Log in </h1>
          </div>
          <LoginForm onLogin = {props.onLogin}/>
        </div>
        <div className="single">
            <div className="form-redirect">
              <h2> Not member yet? </h2>
              <button className="big-button"><Link to='/register'>Register</Link> </button>
            </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
}

function Register(props) {
    return (
      <div className ="container-single">
        <div className ="container-center">
          <div className ="single">
            <div className="form-title">
              <h1> Join us! </h1>
            </div>
            <RegisterForm onRegister = {props.onRegister} />
          </div>
          <div className="single">
              <div className="form-redirect">
                <h2> Already a member? </h2>
                <button className="big-button"><Link to='/login'> Log in </Link> </button>
              </div>
          </div>
        </div>
      </div>
    )
}

Register.propTypes = {
  onRegister: PropTypes.func.isRequired
}

function ForgotPassword(props) {
  return (
    <div className="container-single">
      <div className="container-center">
        <div className="single">
          <div className="form-title">
            <h1> Reset your Password </h1>
          </div>
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  )
}

module.exports = {
  ForgotPassword: ForgotPassword,
  Register: Register,
  Login: Login
}
