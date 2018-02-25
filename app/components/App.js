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

const { Contact } = require('./Contact');
const { ModifyWebsite } = require('./Contact');
const { ReportWebsite } = require('./Contact');

const { Browse } = require('./Browse');

const { Login } = require('./Auth');
const { Register } = require('./Auth');
const { ForgotPassword } = require('./Auth');

const { AddWebsite } = require('./Admin');
const { AddKeyword } = require('./Admin');
const { AddModify } = require('./Admin');

const { PrivateRoute } = require('./RestrictedRoutes');
const { StrangerRoute } = require('./RestrictedRoutes');

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
            <Route path="/conditions" component={Conditions} />
            <Route path="/business" component={Business} />
            <Route path="/about" component={About} />
            <Route path="/forgotpassword" component={ForgotPassword} />

            <StrangerRoute path="/login" component = {Login} onLogin = {this.onLogin} />
            <StrangerRoute path="/register" component= {Register} onRegister = {this.onRegister} />

            <PrivateRoute path='/browse' component={Browse} user = {this.state.user}/>
            <PrivateRoute path="/profile" component={Profile} user = {this.state.user} handleLogout = {this.onLogout} />
            <PrivateRoute path="/modify" component={ModifyWebsite} user = {this.state.user} />
            <PrivateRoute path="/report" component={ReportWebsite} user = {this.state.user} />

            <PrivateRoute path="/addWebsite" component = { AddWebsite } user = {this.state.user} />
            <PrivateRoute path="/addKeyword" component = { AddKeyword } user = {this.state.user} />
            <PrivateRoute path="/addModify" component = { AddModify } user = {this.state.user} />

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
      <Redirect to="/" push />
    }
    onRegister = (user) => {
      this.setState({
        user: user
      });
      <Redirect to="/browse" push />
    }
    onLogin = (user) => {
      this.setState({
        user: user
      });
      <Redirect to="/browse" push />
    }
};

export default withRouter(App);
