import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import InputPage from './components/halfer/InputPage';
import jInputPage from './components/jHalfer/jInputPage';
// import Dashboard from './components/ACL/Dashboard';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="inputpage" component={InputPage} />
    <Route path="jinputpage" component={jInputPage} />
    {/* <Route path="dashboard" component={Dashboard} /> */}
  </Route>
  );
