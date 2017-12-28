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

    const { information } = props;
    const { loggedIn } = props;

    return (
        <div id="main">
            <Switch>
              <Route path="/" render={(loggedIn) => (<Header loggedIn={loggedIn}/>)} />
              <Route path="/browse" exact render={(information) => (<RegisterHome information = {information}/>)} />
            </Switch>
        </div>
    )
};
