const React = require('react');
const PropTypes = require('prop-types');

class RequestWebsiteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return(
        <form method="POST" action={this.props.action} className="form-small">
          <div className="form-group">
            <input style={{marginBottom: "20px"}} type="text" placeholder="Website Name" name="name" className="big-input"/>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Career Page URL (1)" name="url1" className="big-input"/>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Career Page URL (2) (optional)" name="url2" className="big-input"/>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Career Page URL (3) (optional)" name="url3" className="big-input"/>
          </div>
          <div className="form-group">
            <p>Once the the request comes through, we'll add the company to your subscribes automatically. Keep in mind this might take up to 24 hours.</p>
          </div>
          <div className="form-group">
            <button type="submit" className="big-button">Submit Website</button>
          </div>
        </form>
    )
  }
}

class RegisterForm extends React.Component {
  render() {
    return (
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
    )
  }
}

class LoginForm extends React.Component {
  render() {
    return (
        <form method="POST" action="/login" className="form-small">
          <div className="form-group">
            <input type="text" id="email" placeholder="Your Email Address" name="email" className="big-input"/>
          </div>
          <div className="form-group">
            <input type="password" id="password" placeholder="Your Password" name="password" className="big-input"/>
          </div>
          <div className="form-group">
            <button type="submit" className="big-button">Log in</button>
          </div>
        </form>
    );
  }
}

module.exports = {
  RequestWebsiteForm: RequestWebsiteForm,
  LoginForm: LoginForm,
  RegisterForm: RegisterForm
}
