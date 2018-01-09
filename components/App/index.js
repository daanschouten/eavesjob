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
import Profile from '../Profile';

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
      this.onLogout = this.onLogout.bind(this);
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
              <Route path="/" exact render={() => (<RegisterHome/>)} />
              <Route path="/login" render={props => <Login user = {this.state.user} handleLogin = {this.onLogin} />} />
              <Route path="/browse" render={() => (<Browse/>)} />
              <Route path="/addKeyword" render={() => (<AddKeyword/>)} />
              <Route path="/profile" render={props => <Profile user = {this.state.user} handleLogout = {this.onLogout}/> } />
              <Route path="/register" render={() => (<Register/>)} />
              <Route path="/requestwebsite" render={() => (<RequestWebsite />)} />
              <Route path="/addwebsite" render={() => (<AddWebsite />)} />
              <Route component = { NotFound }/>
            </Switch>
            <Footer user={ this.state.user } />
        </div>
      )
    }
    //  last route matches when no other does
    onLogout() {
      if (this.state.user) {
        localStorage.removeItem('user');
        this.setState({
          user: {}
        });
      }
      this.props.history.push('/');
    }
    onLogin(user) {
      this.setState({
        user: user
      });
      this.props.history.push('/');
    }

};

export default withRouter(App);
