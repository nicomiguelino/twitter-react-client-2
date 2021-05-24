import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import './App.scss';
import Feed from './components/Feed';
import LoginForm from './components/LoginForm';
import Navigation from './components/Navigation';
import { verifyIfLoggedIn } from './redux/auth/authSlice';

const middot = '\u00b7';

function WorkInProgress({children}) {
  return (
    <div
      className={classNames(
        'container-fluid',
        'd-flex',
        'justify-content-center',
        'align-items-center',
        'mt-3',
        'text-muted'
      )}
    >
      {children}
      <h3 className="display-4 ml-2">
        <i className="bi-cone-striped"></i>
      </h3>
    </div>
  );
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `Yet another Twitter clone ${middot}  Home`;
    dispatch(verifyIfLoggedIn());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>

          <Route>
            <Route exact path="/">
              <Redirect to="/login" />
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
