import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

const { Home } = require('../Home');
const { RegisterHome } = require('../Home');

import Header from '../Header';
import Footer from '../Footer'

import NotFound from '../404';
// import Profile from '../Profile';

const { Login } = require('../Auth');
const { Register } = require('../Auth');

const { WebsiteForm } = require('../Forms');

export default function App(props) {

    const { loggedIn } = props.data;

    return (
        <div id="main">
            <Header loggedIn={ loggedIn } />
            <Switch>
              <Route path="/" exact render={() => (<RegisterHome/>)} />
              <Route path="/login" render={() => (<Login/>)} />
              <Route path="/logout" render={() => (<Home/>)} />
              <Route path="/register" render={() => (<Register/>)} />
              <Route path="/requestwebsite" render={() => (<WebsiteForm/>)} />
              <Route component = { NotFound }/>
            </Switch>
            <Footer loggedIn={ loggedIn } />
        </div>
    )
};

//  last route matches when no other does
