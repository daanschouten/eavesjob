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
import Conditions from './Conditions';
import Business from './Business';
import About from './About';
import Premium from './Premium';

const { Browse } = require('./Browse');

const {
  Contact,
  ModifyWebsite,
  ReportWebsite
} = require('./Contact');

const {
  Login,
  Register,
  ForgotPassword,
  ResetPassword
} = require('./Auth');

const {
  AddWebsite,
  AddKeyword,
  AddModify,
  ReadIssues,
  AdminDB
} = require('./Admin');

const {
  VerifyEmail,
  ContactSent
} = require('./Email');

const { PrivateRoute } = require('./RestrictedRoutes');

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
          <Header user={ this.state.user } onLogin = {this.onLogin} />
          <Switch>

            <Route path="/" exact render={props => <RegisterHome
              onRegister = {this.onRegister} />} />
            <Route path="/contact" component={Contact} />
            <Route path="/support" component={Support} />
            <Route path="/conditions" component={Conditions} />
            <Route path="/business" component={Business} />
            <Route path="/about" component={About} />
            <Route path="/premium" component={Premium} />

            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path="/resetpassword" component={ResetPassword} />

            <Route path="/register" render={props => <Register
              onRegister = {this.onRegister} />} />
            <Route path="/login" render={props => <Login
              onLogin = {this.onLogin} />} />

            <Route path="/verifyEmail" render={props => <VerifyEmail
              onLogin = {this.onLogin} />} />
            <Route path="/contactSent" component={ContactSent} />
            <Route path="/forgotPassword" component={ForgotPassword} />

            <PrivateRoute path='/browse' component={Browse} user = {this.state.user}/>
            <PrivateRoute path="/profile" component={Profile} user = {this.state.user} handleLogout = {this.onLogout} />
            <PrivateRoute path="/modify" component={ModifyWebsite} user = {this.state.user} />
            <PrivateRoute path="/report" component={ReportWebsite} user = {this.state.user} />

            <PrivateRoute path="/addWebsite" component = { AddWebsite } user = {this.state.user} />
            <PrivateRoute path="/addKeyword" component = { AddKeyword } user = {this.state.user} />
            <PrivateRoute path="/addModify" component = { AddModify } user = {this.state.user} />
            <PrivateRoute path="/readIssues" component = { ReadIssues } user = {this.state.user} />
            <PrivateRoute path="/adminDB" component = { AdminDB } user = {this.state.user} />

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
    }
    onRegister = (user) => {
      this.setState({
        user: user
      });
    }
    onLogin = (user) => {
      this.setState({
        user: user
      });
    }
};

export default withRouter(App);
