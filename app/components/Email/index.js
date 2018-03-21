import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
const { Link } = require('react-router-dom');

function ErrorMessage(props) {
  return (
    <div className="form-group">
      <div className="warning">
        <p> {props.eMessage} </p>
      </div>
    </div>
  )
}

function SuccessMessage(props) {
  return (
    <div className="form-group">
      <div className="success">
        <p> {props.sMessage} </p>
      </div>
    </div>
  )
}

class VerifyEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      success: false
    }
  }
  componentDidMount() {
    const pathLength = this.props.path.length;
    const fullPath = this.props.location.pathname;
    let token = fullPath.substring(pathLength + 1);
    // include the slash at the end of the path
    return this.verifyAccount(token);
  }
  saveSession = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  }
  verifyAccount = (token) => {
    // somehow retrieve token from url
    axios.get(`http://localhost:3000/verifyEmail/${token}`)
      .then((response) => {
        console.log(response);
        if (response.data.token) {
          this.setState({
            success: true,
          }, function() {
            let user = response.data;
            this.saveSession(user);
            this.props.onLogin(user);
          });
        }
      })
      .catch((error) => {
        var eMessage = error.response.data.error.message;
        this.setState({
          error: eMessage
        })
      })
  }
  render() {
    return (
      <div className="container-single">
        <div className="container-center">
          <div className="single">
            <div className="form-small">
              <div className="form-title">
                <h1> Account Verification </h1>
              </div>

              <div className="single-text">
                {
                  this.state.success ?
                      <p> Your account has been verified! </p>
                  :
                      <p> We are verifying your account .. </p>
                }
              </div>
              {
                this.state.error !== "" ?
                  <ErrorMessage eMessage = {this.state.error} />
                :
                  null
              }
              {
                this.state.error !== "" || this.state.success ?
                  <div className = "form-group">
                    <button className="big-button"><Link to='/'>Visit Homepage</Link> </button>
                  </div>
                : null
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function ContactSent(props) {
  return (
    <div className="container-single">
      <div className="container-center">
        <div className="single">
          <div className="form-small">
            <div className="form-title">
              <h1> Contact Us </h1>
            </div>
            <div className="single-text">
                <p> Your message has been sent! </p>
            </div>
            <div className = "form-group">
              <button className="big-button"><Link to='/'>Visit Homepage</Link> </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

module.exports = {
  VerifyEmail: VerifyEmail,
  ContactSent: ContactSent
}
