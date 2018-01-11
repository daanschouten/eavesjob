const React = require('react');
const PropTypes = require('prop-types');
import axios from 'axios';
const { Link } = require('react-router-dom');


class AddWebsiteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      firstLink: "",
      secondLink: "",
      thirdLink: ""
    }
    this.performAddWebsite = this.performAddWebsite.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    axios.get('http://localhost:3000/addWebsite')
      .then((response) => {
        if (response.data.name) {
          let responseObj = {
            name: response.data.name,
            firstLink: response.data.links[0]
          };
          if (response.data.links[1]) {
              responseObj.secondLink = response.data.links[1];
          }
          if (response.data.links[2]) {
              responseObj.response.data.links[2];
          }
          this.setState(responseObj);
        }
      })
      .catch((error) => {
        console.log("error fetching and parsing data", error);
      })
  }
  handleChange(e) {
    let returnObj = {};
    returnObj[e.target.name] = e.target.value;
    this.setState(returnObj);
  }
  performAddWebsite(e) {
    e.preventDefault();
    e.currentTarget.reset();
    console.log("posting!");
    axios.post('http://localhost:3000/addWebsite', {
      name: this.state.name,
      firstLink: this.state.firstLink,
      secondLink: this.state.secondLink,
      thirdLink: this.state.thirdLink,
    })
    .then((response) => {
      let data = response.data;
      console.log(data);
      this.setState({
        name: "",
        firstLink: "",
        secondLink: "",
        thirdLink: ""
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    return(
      <form className="form-small" onSubmit={this.performAddWebsite}>
        <div className="form-group">
          <input style={{marginBottom: "20px"}} type="text" placeholder="Website Name" className="big-input" name="name" value={this.state.name} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Career Page URL (1)" name="firstLink" className="big-input" value={this.state.firstLink} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <Link target = "_blank" to={this.state.firstLink}>{this.state.firstLink}</Link>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Career Page URL (2) (optional)" name="secondLink" className="big-input" value={this.state.secondLink} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <Link target = "_blank" to={this.state.secondLink}>{this.state.secondLink}</Link>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Career Page URL (3) (optional)" name="thirdLink" className="big-input" value={this.state.thirdLink} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <Link target = "_blank" to={this.state.thirdLink}>{this.state.thirdLink}</Link>
        </div>
        <div className="form-group">
          <button type="submit" className="big-button">Add Website</button>
        </div>
      </form>
    )
  }
}

// <button type="submit" className="big-button">Remove Request</button>

class RequestWebsiteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      firstLink: "",
      secondLink: "",
      thirdLink: ""
    }
    this.performRequestWebsite = this.performRequestWebsite.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    let returnObj = {};
    returnObj[e.target.name] = e.target.value;
    this.setState(returnObj);
  }
  performRequestWebsite(e) {
    e.preventDefault();
    e.currentTarget.reset();
    axios.post('http://localhost:3000/requestWebsite', {
      name: this.state.name,
      firstLink: this.state.firstLink,
      secondLink: this.state.secondLink,
      thirdLink: this.state.thirdLink,
    })
    .then((response) => {
      let data = response.data;
      console.log(data);
      this.setState({
        name: "",
        firstLink: "",
        secondLink: "",
        thirdLink: ""
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    return(
      <form className="form-small" onSubmit={this.performRequestWebsite}>
        <div className="form-group">
          <input style={{marginBottom: "20px"}} type="text" placeholder="Website Name" className="big-input" name="name" value={this.state.name} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Career Page URL (1)" name="firstLink" className="big-input" value={this.state.firstLink} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Career Page URL (2) (optional)" name="secondLink" className="big-input" value={this.state.secondLink} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Career Page URL (3) (optional)" name="thirdLink" className="big-input" value={this.state.thirdLink} onChange={this.handleChange} />
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
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
    this.performRegister = this.performRegister.bind(this);
    this.saveSession = this.saveSession.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    let returnObj = {};
    returnObj[e.target.name] = e.target.value;
    this.setState(returnObj);
  }
  saveSession(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  performRegister(e) {
    e.preventDefault();
    e.currentTarget.reset();
    axios.post('http://localhost:3000/register', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email.toLowerCase(),
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    })
    .then((response) => {
      let user = response.data;
      this.saveSession(user);
      this.props.onRegister(user);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    return (
      <form className="form-small" onSubmit={this.performRegister}>
        <div className="form-group">
          <input type="text" placeholder="First Name" name="firstName" className="big-input half" value={this.state.firstName} onChange={this.handleChange} />
          <input type="text" placeholder="Last Name" name="lastName" className="big-input half" value={this.state.lastName} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <input type="email" placeholder="Your Email Address" name="email" className="big-input" value={this.state.email} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="password" name="password" placeholder="Password" className="big-input half" value={this.state.password} onChange={this.handleChange}/>
          <input type="password" name="confirmPassword" placeholder="Confirm Password" className="big-input half" value={this.state.confirmPassword} onChange={this.handleChange}/>
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
      email: "",
      password: ""
    }
    this.performLogin = this.performLogin.bind(this);
    this.saveSession = this.saveSession.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    let returnObj = {};
    returnObj[e.target.name] = e.target.value;
    this.setState(returnObj);
  }
  saveSession(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  performLogin(e) {
    e.preventDefault();
    e.currentTarget.reset();
    axios.post('http://localhost:3000/login', {
      email: this.state.email.toLowerCase(),
      password: this.state.password
    })
    .then((response) => {
      let user = response.data;
      this.saveSession(user);
      this.props.onLogin(user);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    return (
        <form className="form-small" onSubmit={this.performLogin}>
          <div className="form-group">
            <input type="email" id="email" placeholder="Your Email Address" name="email" className="big-input" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <input type="password" id="password" placeholder="Your Password" name="password" className="big-input" value={this.state.password} onChange={this.handleChange} />
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
  AddWebsiteForm: AddWebsiteForm,
  RequestWebsiteForm: RequestWebsiteForm,
  LoginForm: LoginForm,
  RegisterForm: RegisterForm
}
