import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

const { Home } = require('../home');

export default function App() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/browse" component={Home} />
            </Switch>
        </div>
    )
};


// <Route path="/pokemon" exact render={() => (<Redirect to="/pokemon/ability/telepathy" />)} />
// <Route path="/pokemon/ability/:ability" render={(location) => (<List pokemon={pokemon.list} location={location} />)} />
