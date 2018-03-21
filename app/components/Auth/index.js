import React from 'react';
import PropTypes from 'prop-types';

const {
  RegisterForm,
  LoginForm,
  ForgotPasswordForm,
  ResetPasswordForm
 } = require('../Forms');

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
        <div className="form-group">
          <Link to="/forgotPassword"> forgot password? </Link>
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

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ""
    }
  }
  componentDidMount() {
    const pathLength = this.props.match.path.length;
    const fullPath = this.props.location.pathname;
    let token = fullPath.substring(pathLength + 1);
    // include the slash at the end of the path
    this.setState({
      token: token
    })
  }
  render() {
    return (
      <div className="container-single">
        <div className="container-center">
          <div className="single">
            <div className="form-title">
              <h1> Reset your Password </h1>
            </div>
            <ResetPasswordForm token = {this.state.token} />
          </div>
        </div>
      </div>
    )
  }
}


module.exports = {
  ForgotPassword: ForgotPassword,
  ResetPassword: ResetPassword,
  Register: Register,
  Login: Login
}
