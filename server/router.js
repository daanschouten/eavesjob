import React from 'react';
import {matchPath, StaticRouter} from 'react-router-dom';

import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';

import routes from './routes';
import FullPage from './renderFullPage.js';

// import App from '../components/App';
// let { Home }  = require('../components/home');

import App from '../components/App';

let router = function(req, res) {

  const match = routes.reduce((acc, route) => matchPath(req.url, {
    path: route,
    exact: true
  }) || acc, null);

  if (!match) {
    res.status(404).send('page not found');
    // page not found nice beautiftul page
    return;
  }

  try {
    const context = {}

    const html = renderToString(
      <StaticRouter context={context} location={req.url} >
          <App />
      </StaticRouter>
    )
    return res.send(FullPage(html));

  } catch (e) {
    console.log(e);
    res.status(404).send('Oh No! I cannot find blah blah')
  }
};

module.exports = {
  router: router
}
