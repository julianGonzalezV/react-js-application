import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
//import PersonApp from './PersonApp';
import HomePage from './components/home/Home';
import PersonContainer from './components/person/js/PersonContainer';
import PersonTable from './components/person/js/PersonTable';


//import CatsPage from './components/cats/CatsPage';
//import CatPage from './components/cats/CatPage';

export default (
  <Route path="/" component={App}>
    <Route path="/Home" component={HomePage} />
    <Route path="/persons" component={PersonContainer} />
  </Route>
);
