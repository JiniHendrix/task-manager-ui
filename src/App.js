import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  SignUp
} from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/signup' component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
