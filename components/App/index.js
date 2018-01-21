import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
    withRouter
} from 'react-router-dom';

const { Home } = require('../Home');
const { RegisterHome } = require('../Home');
const { Browse } = require('../Browse');
import Header from '../Header';
import Footer from '../Footer';
import NotFound from '../404';
const { Profile } = require('../Profile');
const { Login } = require('../Auth');
const { Register } = require('../Auth');
const { RequestWebsite } = require('../Contact');
const { Contact } = require('../Contact');
const { AddWebsite } = require('../Admin');
const { AddKeyword } = require('../Admin');

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: {}
      }
      this.redirectUser = this.redirectUser.bind(this);
      this.onLogout = this.onLogout.bind(this);
      this.onRegister = this.onRegister.bind(this);
      this.onLogin = this.onLogin.bind(this);
    }
    componentDidMount() {
      let canUseDOM = !!(
            typeof window !== 'undefined' &&
            window.document &&
            window.document.createElement
      );
      if (canUseDOM) {
        let user = localStorage.getItem('user');
        if (user) {
          this.setState({
            user: JSON.parse(user)
          })
        }
      }
    }
    render() {
      return (
        <div id="main">
            <Header user={ this.state.user } />
            <Switch>
              <Route path="/" exact render={props => <RegisterHome
                onRegister = {this.onRegister} />} />
              <Route path="/login" render={props => <Login
                onLogin = {this.onLogin} />} />
              <Route path="/register" render={props => <Register
                onRegister = {this.onRegister} /> } />

              <Route path="/browse" render={props => <Browse
                user = {this.state.user} /> } />
              <Route path="/profile" render={props =>  <Profile
                user = {this.state.user}
                handleLogout = {this.onLogout} /> } />

              <Route path="/addKeyword" component={AddKeyword} />
              <Route path="/requestwebsite" component = {RequestWebsite} />
              <Route path="/addwebsite" component = {AddWebsite} />
              <Route path="/contact" component={Contact} />
              <Route component = { NotFound }/>
            </Switch>
            <Footer />
        </div>
      )
    }
    redirectUser(to) {
      this.props.history.push(to);
    }
    onLogout() {
      if (this.state.user) {
        localStorage.removeItem('user');
        this.setState({
          user: {}
        });
      }
      this.redirectUser('/');
    }
    onRegister(user) {
      this.setState({
        user: user
      });
      this.redirectUser('/browse');
    }
    onLogin(user) {
      this.setState({
        user: user
      });
      this.redirectUser('/browse');
    }
};

export default withRouter(App);
