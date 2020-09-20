import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Error } from './components/Error';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        withRouter(<Route path='/' component={Home} exact />)
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
