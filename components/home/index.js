const React = require('react');
const PropTypes = require('prop-types');
const RegisterForm = require('../Auth').RegisterForm;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.redirectSupport = this.redirectSupport.bind(this);
    this.redirectRegister = this.redirectRegister.bind(this);
  }
  redirectSupport() {
    location.href = '/support';
  }
  redirectRegister() {
    location.href = '/register';
  }
  render() {
    return (
      <div className="container-single">
        <div className="container-center">
          <h1 className="title">We monitor career pages,<br /> so you don't have to.</h1>
          <p>Checking for new vacancies can be a hassle. <br /> With EavesJob, you simply select the career pages of organisations you're interested in. Whenever career opportunities appear, we'll shoot you an email.  </p>
          <div id="front-buttons">
            <button onClick= {this.redirectRegister } className="big-button">Sign Up Free</button>
            <button onClick= {this.redirectSupport} className="big-button">Read More</button>
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
            <h2 className="title">We monitor career pages,<br/>
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
