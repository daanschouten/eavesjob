import '../stylesheets/main.less';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../../components/App';

ReactDOM.hydrate((
  <Router>
      <App data={window.__PRELOADED_STATE__}/>
  </Router>),
  document.getElementById('root')
)
