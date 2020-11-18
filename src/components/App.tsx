import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import { Header } from './Header';
import { ErrorNotification } from './ErrorNotification';
import { Home } from './Home';
import { Users } from './Users';
import { Posts } from './Posts';

function App() {
  return (
    <>
      <ErrorNotification />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default hot(module)(App);
