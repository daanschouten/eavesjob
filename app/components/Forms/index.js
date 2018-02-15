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
  }
  componentDidMount() {
    if (this.props.user.token) {
      this.retrieveRequestedWebsite(this.props.user);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.props.user ) {
      this.retrieveRequestedWebsite(nextProps.user);
    }
  }
  retrieveRequestedWebsite = (user) => {
    axios.get(`http://localhost:3000/addWebsite/${user.token}`)
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
  handleChange = (e) => {
    let returnObj = {};
    returnObj[e.target.name] = e.target.value;
    this.setState(returnObj);
  }
  performAddWebsite = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    axios.post(`http://localhost:3000/addWebsite/${this.props.user.token}`, {
      name: this.state.name,
      firstLink: this.state.firstLink,
      secondLink: this.state.secondLink,
      thirdLink: this.state.thirdLink,
    })
    .then((response) => {
      this.setState({
        name: "",
        firstLink: "",
        secondLink: "",
        thirdLink: ""
      }, function() {
        console.log(this.props.user);
        this.retrieveRequestedWebsite(this.props.user);
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }
  performRemoveRequest = (e) => {
    axios.post(`http://localhost:3000/removeRequest/${this.props.user.token}`, {
      name: this.state.name,
      firstLink: this.state.firstLink,
      secondLink: this.state.secondLink,
      thirdLink: this.state.thirdLink,
    })
    .then((response) => {
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
      <div className="single">
        <div className="form-title">
          <h1>Add New Website</h1>
        </div>
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
        <div className="form-small">
          <button className="big-button" onClick={this.performRemoveRequest}> Remove Request </button>
        </div>
      </div>
    )
  }
}

function ModifyLinks(props) {
  return (
    <p><Link to={props.link.href} target= "_blank"> {props.link.pathname} </Link></p>
  )
}

class ReportWebsiteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.website.name,
      comments: ""
    }
  }
  handleChange = (e) => {
    let returnObj = {};
    returnObj[e.target.name] = e.target.value;
    this.setState(returnObj);
  }
  performReportWebsite = (e) => {
  }
  render() {
    return (
        <form className="form-small" onSubmit={this.performReportWebsite}>
          <div className="form-group">
            <p> {"The links we currently have for " + this.state.name + " are:" }</p>
          </div>
          <div className="form-group">
          {
            this.props.website.links.map(function(link) {
              return (
                <ModifyLinks link = {link} key= {link.origin} />
              )
            })
          }
          </div>
          <div className="form-group">
            <p> Please indicate whether the name, one of the links, or anything else is incorrect or incomplete. </p>
          </div>
          <div className="form-group">
            <input type="text" className="big-input" placeholder="Comments" name="comments" value = {this.state.comments} onChange = {this.handleChange} />
          </div>
          <div className="form-group">
            <button type="submit" className="big-button"> Submit Issue </button>
          </div>
        </form>
    )
  }
}

class ForgotPasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    }
  }
  handleChange = (e) => {
    let returnObj = {};
    returnObj[e.target.name] = e.target.value;
    this.setState(returnObj);
  }
  performForgotPassword = (e) => {
  }
  render() {
    return (
        <form className="form-small" onSubmit={this.performForgotPassword}>
          <div className="form-group">
            <input type="text" className="big-input" placeholder="Your Email Address" name="email" value = {this.state.email} onChange = {this.handleChange} />
          </div>
          <div className="form-group">
            <button type="submit" className="big-button"> Send Reset Email </button>
          </div>
        </form>
    )
  }
}

class ModifyWebsiteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.website.name,
      newLink: ""
    }
  }
  handleChange = (e) => {
    let returnObj = {};
    returnObj[e.target.name] = e.target.value;
    this.setState(returnObj);
  }
  performModifyWebsite = (e) => {
  }
  render() {
    return (
        <form className="form-small" onSubmit={this.performModifyWebsite}>
          <div className="form-group">
            <p> {"The links we currently have for " + this.state.name + " are:" }</p>
          </div>
          <div className="form-group">
          {
            this.props.website.links.map(function(link) {
              return (
                <ModifyLinks link = {link} key= {link.origin} />
              )
            })
          }
          </div>
          <div className="form-group">
            <input type="text" className="big-input" placeholder="Additional Career Page URL" name="newLink" value = {this.state.newLink} onChange = {this.handleChange} />
          </div>
          <div className="form-group">
            <p> It's easiest to copy the URL from your address bar. Please include the http:// or https:// part. </p>
          </div>
          <div className="form-group">
            <button type="submit" className="big-button"> Submit Additional Page </button>
          </div>
        </form>
    )
  }
}

class RequestWebsiteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      firstLink: "",
      secondLink: "",
      thirdLink: ""
    }
  }
  componentDidMount = (props) => {
    this.setState({
      name: this.props.query
    })
  }
  componentWillReceiveProps = (nextProps) => {
    if (nextProps.query !== this.props.query ) {
      this.setState({
        name: nextProps.query
      })
    }
  }
  handleChange = (e) => {
    let returnObj = {};
    returnObj[e.target.name] = e.target.value;
    this.setState(returnObj);
  }
  performRequestWebsite = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    axios.post(`http://localhost:3000/requestWebsite/${this.props.user.token}`, {
      name: this.state.name,
      firstLink: this.state.firstLink,
      secondLink: this.state.secondLink,
      thirdLink: this.state.thirdLink,
    })
    .then((response) => {
      let data = response.data;
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
      <div className="single" style={{width: '100%'}}>
        <form className="form-small" onSubmit={this.performRequestWebsite}>
          <div className="form-group">
            <p> It appears {this.props.query} is not in the database yet. Want to add it? </p>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Website Name" className="big-input" name="name" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <p> It's easiest to copy the URL from your address bar. Make sure to include the http:// or https:// part. </p>
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
            <p> Once the the request comes through, we'll add the company to your subscribes automatically. Keep in mind this might take up to 24 hours. </p>
          </div>
          <div className="form-group">
            <button type="submit" className="big-button">Submit Website</button>
          </div>
        </form>
      </div>
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
  }
  handleChange = (e) => {
    let returnObj = {};
    returnObj[e.target.name] = e.target.value;
    this.setState(returnObj);
  }
  saveSession = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  }
  performRegister = (e) => {
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

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      message: ""
    }
  }
  handleChange = (e) => {
    let returnObj = {};
    returnObj[e.target.name] = e.target.value;
    this.setState(returnObj);
  }
  performContact = (e) => {
  }
  render() {
    return (
        <form className="form-small" onSubmit={this.performContact}>
          <div className="form-group">
            <input type="email" id="email" placeholder="Your Email Address" name="email" className="big-input" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <textarea type="text" id="password" placeholder="Your Message" name="message" className="big-textarea" value={this.state.message} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <button type="submit" className="big-button"> Send Message </button>
          </div>
        </form>
    );
  }
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }
  handleChange = (e) => {
    let returnObj = {};
    returnObj[e.target.name] = e.target.value;
    this.setState(returnObj);
  }
  saveSession = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  }
  performLogin = (e) => {
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
  ModifyWebsiteForm: ModifyWebsiteForm,
  ReportWebsiteForm: ReportWebsiteForm,
  ForgotPasswordForm: ForgotPasswordForm,
  LoginForm: LoginForm,
  ContactForm: ContactForm,
  RegisterForm: RegisterForm
}
