import classNames from 'classnames';
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { apiClient } from '../utilities/apiClient';
import { selectAuth } from '../redux/auth/authSlice';
import { verifyIfLoggedIn } from '../redux/auth/authSlice';

function LoginRequired({ children }) {
  const { isLoggedIn } = useSelector(selectAuth);

  if (!isLoggedIn) {
    return <></>;
  }

  return <>{children}</>;
}

function Navigation() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { displayName } = useSelector(selectAuth);

  const handleLogout = async (event) => {
    event.preventDefault();

    await apiClient.post('/logout');

    dispatch(verifyIfLoggedIn());
    history.push('/home');
    history.go(0);
  };

  return (
    <Navbar
      bg="success"
      variant="dark"
      expand="lg"
      sticky="top"
      className={classNames(
        'mb-5',
        'py-3',
        'px-lg-5',
        'px-4',
      )}
    >
      <Link to="/home" className="mr-4 navbar-brand">
        <strong className="d-block">
          Yet another Twitter clone
        </strong>
        <small className="d-block">It's like Twitter, but green.</small>
      </Link>

      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
      />

      <Navbar.Collapse
        id="basic-navbar-nav"
      >
        <Nav
          className={classNames(
            'ml-auto',
            'mt-3',
            'mt-lg-0',
          )}
        >
          <NavLink to="/profile" className="nav-link">
            Profile
          </NavLink>

          <NavLink to="/notifications" className="nav-link">
            Notifications
          </NavLink>

          <LoginRequired>
            <NavLink to="/home" className="nav-link" onClick={handleLogout}>
              Log Out ({ displayName })
            </NavLink>
          </LoginRequired>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
