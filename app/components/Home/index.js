const React = require('react');
const PropTypes = require('prop-types');
const { RegisterForm } = require('../Forms');

function HowItWorks(props) {
  return (
    <div className="container-single">
      <div className="container-center">
        <h1> see how it works </h1>
      </div>
      <div className="container-center">

        <div className="explain-single">
          <div className="explain-text">
            <img src="../../img/one.svg"></img>
            <p> Find the career pages you want monitored. </p>
          </div>
          <img src="../../img/searchWebsite.png"/>
        </div>

        <div className="explain-single">
          <div className="explain-text">
            <img src="../../img/two.svg"></img>
            <p> Select up to five pages, or go premium. </p>
          </div>
          <img src="../../img/clickWebsite.png"/>
        </div>

        <div className="explain-single">
          <div className="explain-text">
            <img src="../../img/three.svg"></img>
            <p> Sit back, and keep an eye on your inbox. </p>
          </div>
          <img src="../../img/monitorWebsite.png"/>
        </div>

      </div>
    </div>
  )
}

export default function RegisterHome(props) {
  return (
    <div className="container-single">
      <div className="container-double">
        <div className="container-left">
          <h1 className="title">We monitor career pages,<br/> so you don't have to. </h1>
          <p className="subtitle"> Checking for new vacancies can be a hassle. With Eavesjob, you only need to indicate which career pages you're interested in. When job opportunities appear, we'll send you an email.  </p>
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
      <HowItWorks/>
    </div>
  )
}
