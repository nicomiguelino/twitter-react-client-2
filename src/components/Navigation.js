import classNames from 'classnames';
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearAccessToken } from '../redux/auth/authSlice';
import { apiClient } from '../utilities/apiClient';

function Navigation() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = async (event) => {
    event.preventDefault();

    await apiClient.post('/logout');

    dispatch(clearAccessToken());
    history.push('/login');
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

          <NavLink to="/login" className="nav-link" onClick={handleLogout}>
            Log Out
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
