import React from 'react';
import {matchPath, StaticRouter} from 'react-router-dom';

import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';

import routes from './routes';
import FullPage from './renderFullPage.js';

import App from '../components/App';

let router = function(req, res) {

  const match = routes.reduce((acc, route) => matchPath(req.url, {
    path: route,
    exact: true
  }) || acc, null);

  // if (!match) {
  //   res.status(404).send('page not found');
  //   // page not found nice beautiftul page
  //   return;
  // }

  try {
    const context = {};
    const data = {
      loggedIn: res.locals.currentUser ? true : false
    }

    const html = renderToString(
      <StaticRouter context={context} location={req.url} >
          <App data = {data} />
      </StaticRouter>
    )
    return res.send(FullPage(html, data));

  } catch (e) {
    console.log(e);
    res.status(404).send('Oh No! I cannot find blah blah')
  }
};

module.exports = {
  router: router
}
