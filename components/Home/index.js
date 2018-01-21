const React = require('react');
const PropTypes = require('prop-types');
const { RegisterForm } = require('../Forms');

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
          <p> Checking for new vacancies can be a hassle. <br/> With EavesJob, you just select the career pages you're interested in. Whenever career opportunities appear, we'll send you an email.  </p>
          <div id="front-buttons">
            <button onClick= {this.redirectRegister } className="big-button">Sign Up Free</button>
            <button onClick= {this.redirectSupport} className="big-button">Read More</button>
          </div>
        </div>
      </div>
    )
  }
}

function RegisterHome(props) {
  return(
    <div className="container-double">
        <div className="container-left">
          <h2 className="title">We monitor career pages,<br/> so you don't have to.</h2>
          <p> Checking for new vacancies can be a hassle. <br/> With EavesJob, you just select the career pages you're interested in. Whenever career opportunities appear, we'll send you an email.  </p>
        </div>
        <div className="container-right">
          <div className ="single">
            <div className="form-title">
              <h1> Join for Free! </h1>
            </div>
            <RegisterForm onRegister = {props.onRegister} />
          </div>
        </div>
    </div>
  )
}

module.exports = {
  Home: Home,
  RegisterHome: RegisterHome
}
