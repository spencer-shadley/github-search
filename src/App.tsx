import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Error } from './components/Error';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Home} exact />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
