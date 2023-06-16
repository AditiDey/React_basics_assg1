import React, { useEffect, useState } from 'react';

import { Switch, Route, useHistory, useLocation } from 'react-router-dom';

import Error from './pages/Error';
import './App.css';
import { Provider } from 'react-redux';

import ReduxExample from './ReduxExample';
import NextScreen from './NextScreen';
import store from './store';
import NavBar from './component/navbar/NavBar';

import Team from './pages/dashboard/Team';

import Home from './pages/home/Home';
import About from './pages/dashboard/About';
import Apicall from './Apicall';
const App = () => {
  const his = useHistory();
  const loc = useLocation();

  return (
    <>
      <Provider store={store}>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/team" component={Team} />
        
        <Route exact path="/reduxexample" component={ReduxExample} />
        <Route exact path="/nextscreen" component={NextScreen} />
        <Route exact path="/Apicall" component={Apicall} /> {/* Add this line */}

        <Route component={Error} />
      </Switch>
      </Provider>
    </>
  );
};

export default App;
