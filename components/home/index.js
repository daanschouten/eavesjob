const React = require('react');
const PropTypes = require('prop-types');
const Header = require('../header').Header;
const RegisterForm = require('../auth').RegisterForm;

class Home extends React.Component {
  render() {
    return (
      <div className="container-single">
        <div className="container-center">
          <h1>We monitor career pages,<br /> so you don't have to.</h1>
          <p>Checking for new vacancies can be a hassle. <br /> With EavesJob, you simply select the career pages of organisations you're interested in. Whenever career opportunities appear, we'll shoot you an email.  </p>
          <div id="front-buttons">
            <button onClick={{ 'location.href': '/register'}}>Sign Up Free</button>
            <button onClick={{ 'location.href': '/support'}}>Read More</button>
          </div>
        </div>
      </div>
    )
  }
}

class RegisterHome extends React.Component {
  render () {
    return(
      <div className="container-double">
          <div className="container-left">
            <h2>We monitor career pages,<br/>
              so you don't have to.</h2>
            <p>Checking for new vacancies can be a hassle. With EavesJob, you simply select the career pages of organisations you're interested in. Whenever career opportunities appear, we'll shoot you an email.</p>
          </div>
          <div className="container-right">
            <RegisterForm marginTop={0}/>
          </div>
      </div>
    )
  }
}

module.exports = {
  Home: Home,
  RegisterHome: RegisterHome
}
