import classNames from 'classnames';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../styles/LoginForm.scss';
import { apiClient } from '../utilities/apiClient';
import { verifyIfLoggedIn } from '../redux/auth/authSlice';

function LoginErrorMessage({visible, message}) {
  if (visible) {
    return (
      <div
        className={classNames(
          'd-flex',
          'text-danger',
          'justify-content-center',
        )}
      >
        {message}
      </div>
    );
  } else {
    return <></>
  }
}

function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [passwordHidden, setPasswordHidden] = useState(true);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginError, setLoginError] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState('');

  const handlePasswordToggle = () => {
    setPasswordHidden(!passwordHidden);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await apiClient.post('/login', { username, password });
      setLoginError(false);
      dispatch(verifyIfLoggedIn());
      history.push('/home');
    } catch(error) {
      setLoginError(true);
      setLoginErrorMessage(error.response.data.message);
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="LoginForm container-fluid bg-success">
      <div
        className={classNames(
          'd-flex',
          'justify-content-center',
          'align-items-center',
          'h-100',
        )}
      >
        <form className="login-form bg-white rounded" action="">
          <div className="mb-5">
            <h3 className={classNames(
              'text-center',
              'text-success',
              'display-4',
            )}>
              <i className="bi-twitter"></i>
            </h3>
            <h3 className="text-center text-success mb-1">
              Yet another Twitter clone
            </h3>
            <h6 className="text-center text-black-50">
              It's like Twitter, but green.
            </h6>
          </div>

          <div className="form-group">
            <input
              className="form-control p-3"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>

          <div className="form-group">
            <div className="input-group">
              <input
                className="form-control p-3"
                type={passwordHidden ? "password": "text"}
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />

              <div className="input-group-append">
                <span
                  className="input-group-text pr-3"
                  onClick={handlePasswordToggle}
                >
                  {
                    passwordHidden ?
                      <i className="bi-eye-slash-fill"></i> :
                      <i className="bi-eye-fill"></i>
                  }
                </span>
              </div>
            </div>
          </div>

          <LoginErrorMessage visible={loginError} message={loginErrorMessage} />

          <button
            className={classNames(
              'btn',
              'btn-success',
              'w-100',
              'login-button',
              'font-weight-bold',
              'mt-4',
            )}
            onClick={handleLogin}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
