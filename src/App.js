import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import './App.scss';
import Navigation from './components/Navigation';
import Feed from './components/Feed';

const middot = '\u00b7';

function WorkInProgress({children}) {
  return (
    <div className="container-fluid d-flex justify-content-center mt-5">
      {children}
    </div>
  );
}

function App() {
  useEffect(() => {
    document.title = `Yet another Twitter clone ${middot}  Home`;
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login">
            <div className="container-fluid d-flex justify-content-center mt-5">
              <h3>Login page is still a work in progress.</h3>
            </div>
          </Route>

          <Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>

            <Navigation />

            <Route path="/home">
              <Feed />
            </Route>

            <Route path="/profile">
              <WorkInProgress>
                <h3>Profile page is still a work in progress.</h3>
              </WorkInProgress>
            </Route>

            <Route path="/notifications">
              <WorkInProgress>
                <h3>Notifications page is still a work in progress.</h3>
              </WorkInProgress>
            </Route>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
