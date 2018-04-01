import React from 'react';
import PropTypes from 'prop-types';
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
            <p> Start typing to find the career pages you want monitored. </p>
          </div>
          <img src="../../img/search-hd-compressed.gif" alt="search career pages" />
        </div>

        <div className="explain-single">
          <div className="explain-text">
            <img src="../../img/two.svg"></img>
            <p> To subscribe to a company's career page, toggle it the button on. </p>
          </div>
          <img src="../../img/find-hd-compressed.gif" alt="find career pages" />
        </div>

        <div className="explain-single">
          <div className="explain-text">
            <img src="../../img/three.svg"></img>
            <p> Whenever a vacancy appears on of the pages you are subscribed to, we will send you an email. </p>
          </div>
          <img src="../../img/subscribed-hd-compressed.gif" alt="subscribe to career pages" />
        </div>

      </div>

      <div className="container-center" style={{"marginTop": "50px"}}>
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

export default function RegisterHome(props) {
  return (
    <div className="container-single">
      <div className="container-double">
        <div className="container-left">
          <h1 className="title">We monitor career pages,<br/> so you don't have to. </h1>
          <p className="subtitle"> Checking for new vacancies can be a hassle. With Eavesjob, you only need to indicate which companies you're interested in. When job opportunities appear, we'll send you an email. </p>
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
      <HowItWorks onRegister = {props.onRegister}/>
    </div>
  )
}

RegisterHome.propTypes = {
  onRegister: PropTypes.func.isRequired
}
