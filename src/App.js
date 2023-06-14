import React, { useEffect, useState } from 'react';

import { Switch, Route, useHistory, useLocation } from 'react-router-dom';

import Error from './pages/Error';
import './App.css';
import NavBar from './component/navbar/NavBar';

import Team from './pages/dashboard/Team';

import Home from './pages/home/Home';
import About from './pages/dashboard/About';

const App = () => {
  const his = useHistory();
  const loc = useLocation();

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/team" component={Team} />

        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
