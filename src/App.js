import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import LandingPage from './pages/landing/LandingPage';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/steps" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
