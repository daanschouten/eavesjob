const React = require('react');
const PropTypes = require('prop-types');
import axios from 'axios';

class RequestWebsiteForm extends React.Component {
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
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    }
    this.performLogin = this.performLogin.bind(this);
  }
  performLogin(e) {
    e.preventDefault();
    axios.post('http://localhost:3000/login', {
      email: 'me@me.com',
      password: 'daan1996'
    })
    .then((response) => {
      // start rippling login
      let user = response.data;
      this.props.handleLogin(user);
    })
    .catch((error) => {
      console.log(error);
    });
    e.currentTarget.reset();
  }
  render() {
    return (
        <form className="form-small" onSubmit={this.performLogin}>
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

class KeywordForm extends React.Component {
  render() {
    return (
      <form method="POST" action="/addKeywords" className="form-small">
        <div className="form-group">
          <input id="name" type="text" placeholder="some keyword" name="name" className="big-input"/>
        </div>
        <div className="form-group">Category:
          <select for="category" name="category">
            <option value="intern">intern</option>
            <option value="professional">professional</option>
            <option value="voluntary">voluntary</option>
            <option value="parttime">parttime</option>
            <option value="fulltime">fulltime </option>
            <option value="general">general</option>
            <option value="skill">skill</option>
          </select>
        </div>
        <button type="submit" class="big-button">Add keyword</button>
      </form>
    )
  }
}

module.exports = {
  KeywordForm: KeywordForm,
  RequestWebsiteForm: RequestWebsiteForm,
  LoginForm: LoginForm,
  RegisterForm: RegisterForm
}
