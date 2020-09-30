import React from 'react';
import { Global, css } from '@emotion/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  SignUp
} from './features';

function App() {
  return (
    <BrowserRouter>
    <Global
      styles={css`
        @font-face {
          font-family: "Lato";
          src: url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
        }

        body {
          font-family: "Lato", sans-serif;
        }
      `} />
      <Switch>
        <Route path='/signup' component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
