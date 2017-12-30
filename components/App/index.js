import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

const { Home } = require('../Home');
const { RegisterHome } = require('../Home');

const { Header } = require('../Header');

import NotFound from '../404';

const { Login } = require('../Auth');
const { Register } = require('../Auth');

const { WebsiteForm } = require('../Forms');

export default function App(props) {

    const { loggedIn } = props.data;

    return (
        <div id="main">
            <Header loggedIn={ loggedIn } />
            <Switch>
              <Route path="/" exact render={() => (<Home/>)} />
              <Route path="/login" render={() => (<Login/>)} />
              <Route path="/register" render={() => (<Register/>)} />
              <Route path="/requestwebsite" render={() => (<WebsiteForm/>)} />
              <Route component = { NotFound }/>
            </Switch>
        </div>
    )
};

//  last route matches when no other does
