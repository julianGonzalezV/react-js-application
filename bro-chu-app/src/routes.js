import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import PersonApp from './PersonApp';
import HomePage from './components/home/Home';


//import CatsPage from './components/cats/CatsPage';
//import CatPage from './components/cats/CatPage';

export default (
  <Route path="/" component={App}>
    <Route path="/Home" component={HomePage} />
    <Route path="/PersonApp" component={PersonApp} />}
  </Route>
);
