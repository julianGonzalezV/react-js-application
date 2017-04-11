import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import WebPage from './WebPage';
//import PersonApp from './PersonApp';
import HomePage from './components/home/Home';
import PersonContainer from './components/person/js/PersonContainer';
import PersonTable from './components/person/js/PersonTable';


//import CatsPage from './components/cats/CatsPage';
//import CatPage from './components/cats/CatPage';

export default (
  <div>
  <Route path="/bro-chu-app" component={WebPage}>
  </Route>

  <Route path="/admonApp" component={App}>
    <Route path="/admonApp/Home" component={HomePage} />
    <Route path="/admonApp/persons" component={PersonContainer} />
  </Route>
  </div>
);
