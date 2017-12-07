const React = require('react');
const PropTypes = require('prop-types');
const Header = require('../header').Header;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }
  render() {
    return (
      <div id="react-main">
        <Header loggedIn= {this.state.loggedIn} />
        <div id="wrapper-single">
          <div className="single-center">
            <div className="form-title">
              <h1>Log in</h1>
            </div>
            <form method="POST" action="/login" className="form-small">
              <div className="form-group">
                <input type="text" id="email" placeholder="Your Email Address" name="email" className="big-input"/>
              </div>
              <div className="form-group">
                <input type="password" id="password" placeholder="Your Password" name="password" className="big-input"/>
              </div>
              <div className="form-group">
                <button type="submit" className="big-button">Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {

};

Login.defaultProps = {

};

class RegisterForm extends React.Component {
  render() {
    return (
      <div className="single-center" style={{ marginTop: this.props.marginTop }}>
        <div className="form-title">
          <h1>Join us!
          </h1>
        </div>
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
      </div>
    )
  }
}

module.exports = {
  RegisterForm: RegisterForm,
  Login: Login
}
