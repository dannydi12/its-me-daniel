import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import App from './App';
import * as serviceWorker from './serviceWorker';
import NotFound from './NotFound/NotFound';
import Attribution from './Attribution/Attribution';
import ScrollToTop from './ScrollToTop/ScrollToTop';

ReactGA.initialize('UA-157458767-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/attribution" component={Attribution} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
