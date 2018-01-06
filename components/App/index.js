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
        loggedIn: this.props.data.loggedIn,
        userID: this.props.data.userID
      }
      this.onLogout = this.onLogout.bind(this);
    }
    render() {
      return (
        <div id="main">
            <Header loggedIn={ this.state.loggedIn } />
            <Switch>
              <Route path="/" exact render={() => (<RegisterHome/>)} />
              <Route path="/login" render={() => (<Login/>)} />
              <Route path="/browse" render={() => (<Browse/>)} />
              <Route path="/addKeyword" render={() => (<AddKeyword/>)} />
              <Route path="/profile" render={props => <Profile handleLogout = {this.onLogout}/> } />
              <Route path="/register" render={() => (<Register/>)} />
              <Route path="/requestwebsite" render={() => (<RequestWebsite />)} />
              <Route path="/addwebsite" render={() => (<AddWebsite />)} />
              <Route component = { NotFound }/>
            </Switch>
            <Footer loggedIn={ this.state.loggedIn } />
        </div>
      )
    }
    //  last route matches when no other does
    onLogout() {
      if (this.state.loggedIn) {
        this.setState({
          loggedIn: false
        });
      }
      this.props.history.push('/');
    }

};

export default withRouter(App);
