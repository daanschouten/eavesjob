import { renderToString } from 'react-dom/server'
import React from 'react';
import { matchPath, StaticRouter } from 'react-router-dom';

import renderFullPage from './renderFullPage';
import App from '../components/App';

export default function router(req, res) {
    try {
      const context = {};
      const data = {};

      const html = renderToString(
        <StaticRouter context={context} location={req.url} >
            <App data = {data} />
        </StaticRouter>
      )
      res.status(200).send(renderFullPage(html, data));
    } catch (e) {
      console.log(e);
      res.status(404).send(`${e}: Oh No! I cannot find blah blah`)
    }
};
