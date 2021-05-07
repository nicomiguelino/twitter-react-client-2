import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.scss';
import Navigation from './components/Navigation';
import Feed from './components/Feed';

const middot = '\u00b7';

function App() {
  useEffect(() => {
    document.title = `Yet another Twitter clone ${middot}  Home`;
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Navigation />
            <Feed />
          </Route>
          <Route path="/login">
            <div className="container-fluid d-flex justify-content-center mt-5">
              <h3>Login page is still a work in progress.</h3>
            </div>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
