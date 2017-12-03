const React = require('react');
const PropTypes = require('prop-types');
const Header = require('../header').Header;

class Login extends React.Component {
  render() {
    return (
      <div id="react-main">
        <Header loggedIn={false}/>
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
    )
  }
}

class Register extends React.Component {
  render() {
    return (
      <div id="react-main">
      <Header loggedIn={this.props.loggedIn}/>
      <div id="front">
        <div id="front-top">
          <div id="banner-left">
            <h2>We monitor career pages,<br/>
              so you don't have to.</h2>
            <p style={{
                maxWidth: '400px'
              }}>Checking for new vacancies can be a hassle. With EavesJob, you simply select the career pages of organisations you're interested in. Whenever career opportunities appear, we'll shoot you an email.</p>
          </div>
          <div id="register-right">
            <div className="single-center" style={{ marginTop: '0' }}>
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
          </div>
        </div>
      </div>
      <div id="front-bottom">
      </div>
    </div>
    );
  }
}

module.exports = {
  Register: Register,
  Login: Login
}
