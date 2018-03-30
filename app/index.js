import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families:
      ['Roboto Condensed:700', 'Roboto:400']
  }
});

import App from './components/App';

ReactDOM.hydrate((
  <Router>
      <App data={window.__PRELOADED_STATE__}/>
  </Router>),
  document.getElementById('root')
)
