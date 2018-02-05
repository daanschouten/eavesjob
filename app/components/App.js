import React from 'react';
import {
    Redirect,
    Route,
    Switch,
    withRouter
} from 'react-router-dom';

import RegisterHome from './Home';
import Header from './Header';
import Footer from './Footer';
import NotFound from './404';
import Profile from './Profile';
import Support from './Support';
import Contact from './Contact';

const { Browse } = require('./Browse');
const { Login } = require('./Auth');
const { Register } = require('./Auth');
const { AddWebsite } = require('./Admin');
const { AddKeyword } = require('./Admin');

const { PrivateRoute } = require('./RestrictedRoutes');
const { StrangerRoute } = require('./RestrictedRoutes');
const { AdminRoute } = require('./RestrictedRoutes');

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: {}
      }
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
            <Route path="/contact" component={Contact} />
            <Route path="/support" component={Support} />

            <StrangerRoute path="/login" component = {Login} onLogin = {this.onLogin} />
            <StrangerRoute path="/register" component= {Register} onRegister = {this.onRegister} />

            <PrivateRoute path='/browse' component={Browse} user={this.state.user}/>
            <PrivateRoute path="/profile" component={Profile} user = {this.state.user} handleLogout = {this.onLogout} />

            <AdminRoute path="/addWebsite" component = {AddWebsite} />
            <AdminRoute path="/addKeyword" component = { AddKeyword } />

            <Route component = { NotFound }/>
          </Switch>
          <Footer />
        </div>
      )
    }
    onLogout = () => {
      if (this.state.user) {
        localStorage.removeItem('user');
        this.setState({
          user: {}
        });
      }
      this.redirectUser('/');
    }
    onRegister = (user) => {
      this.setState({
        user: user
      });
      this.redirectUser('/browse');
    }
    onLogin = (user) => {
      this.setState({
        user: user
      });
      this.redirectUser('/browse');
    }
};

export default withRouter(App);
