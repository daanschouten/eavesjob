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
      this.onLogin = this.onLogin.bind(this);
      this.onSubscribe = this.onSubscribe.bind(this);
      this.onUnsubscribe = this.onUnsubscribe.bind(this);
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
              <Route path="/" exact render={() => (<RegisterHome/>)} />
              <Route path="/login" render={props => <Login
                user = {this.state.user}
                handleLogin = {this.onLogin} />} />
              <Route path="/browse" render={props => <Browse
                user = {this.state.user}
                onSubscribe = {this.onSubscribe}
                onUnsubscribe = {this.onUnsubscribe} /> } />
              <Route path="/addKeyword" render={() => (<AddKeyword/>)} />
              <Route path="/profile" render={props =>  <Profile
                user = {this.state.user}
                onUnsubscribe = {this.onUnsubscribe}
                handleLogout = {this.onLogout} /> } />
              <Route path="/register" render={() => <Register/>} />
              <Route path="/requestwebsite" render={() => (<RequestWebsite />)} />
              <Route path="/addwebsite" render={() => (<AddWebsite />)} />
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
    onLogin(user) {
      this.setState({
        user: user
      });
      this.redirectUser('/');
    }
    onSubscribe(site) {
      this.state.user.subscribedWebsites.push(site);
      this.redirectUser('/');
    }
    onUnsubscribe(site) {
      let index = this.state.user.subscribedWebsites.indexOf(site);
      if (index > -1) {
          this.state.user.subscribedWebsites.splice(index, 1);
      }
      this.redirectUser('/');
    }

};

export default withRouter(App);
