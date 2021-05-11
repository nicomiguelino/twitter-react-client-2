import classNames from 'classnames';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/LoginForm.scss';

function LoginForm() {
  const history = useHistory();

  const [passwordHidden, setPasswordHidden] = useState(true);

  const handlePasswordToggle = () => {
    setPasswordHidden(!passwordHidden);
  };

  const handleLogin = () => {
    history.push('/');
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
