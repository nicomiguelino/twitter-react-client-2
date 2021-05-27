import classNames from 'classnames';
import { Helmet, HelmetProvider } from 'react-helmet-async';
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
import { getTitle } from './utilities/constants';

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
    dispatch(verifyIfLoggedIn());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <HelmetProvider>
        <div className="App">
          <Helmet>
            <title>{getTitle('Home')}</title>
          </Helmet>

          <Switch>
            <Route path="/login">
              <Helmet>
                <title>{getTitle('Login')}</title>
              </Helmet>

              <LoginForm />
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
                <Helmet>
                  <title>{getTitle('Profile')}</title>
                </Helmet>

                <WorkInProgress>
                  <h3>Profile page is still a work in progress.</h3>
                </WorkInProgress>
              </Route>

              <Route path="/notifications">
                <Helmet>
                  <title>{getTitle('Notifications')}</title>
                </Helmet>

                <WorkInProgress>
                  <h3>Notifications page is still a work in progress.</h3>
                </WorkInProgress>
              </Route>
            </Route>
          </Switch>
        </div>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
