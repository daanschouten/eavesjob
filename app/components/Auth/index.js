const React = require('react');
const PropTypes = require('prop-types');
const { RegisterForm } = require('../Forms');
const { LoginForm } = require('../Forms');
const { Link } = require('react-router-dom');

function Login(props) {
  return (
    <div className="container-single">
      <div className="container-center">
        <div className="single">
          <div className="form-title">
            <h1>Log in</h1>
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
                <h2> Log In </h2>
                <button className="big-button"><Link to='/login'>Already a member?</Link> </button>
              </div>
          </div>
        </div>
      </div>
    )
}

module.exports = {
  Register: Register,
  Login: Login
}
