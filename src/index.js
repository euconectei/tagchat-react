import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './static/styles/general.css';

import {Route, BrowserRouter as Router} from 'react-router-dom';
import {ChatPage, LoginPage} from './pages';

const routing = (
  <Router>
    <>
      <Route path="/" exact component={LoginPage} />
      <Route path="/chat" exact component={ChatPage} />
    </>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
