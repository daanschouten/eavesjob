import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

const { RegisterHome } = require('../home');
const { Header } = require('../header');

export default function App(props) {

    const { loggedIn } = props.data;

    return (
        <div id="main">
            <Header loggedIn={loggedIn} />
            <Switch>
              <Route path="/" exact render={() => (<RegisterHome/>)} />
              <Route component = {Header}/>
            </Switch>
        </div>
    )
};

// last route matches when no other does
