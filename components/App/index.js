import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

const { Home } = require('../home');
const { RegisterHome } = require('../home');
const { Header } = require('../header');
import NotFound from '../404';
const { Login } = require('../auth');

export default function App(props) {

    const { loggedIn } = props.data;

    return (
        <div id="main">
            <Header loggedIn={loggedIn} />
            <Switch>
              <Route path="/" exact render={() => (<Home/>)} />
              <Route path="/login" exact render={() => (<Login/>)} />
              <Route component = {NotFound}/>
            </Switch>
        </div>
    )
};

//  last route matches when no other does
