import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import { Header } from 'components/Header';
import { ErrorNotification } from 'components/ErrorNotification';
import { Home } from 'components/Home';
import { Users } from 'components/Users';
import { Posts } from 'components/Posts';

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
