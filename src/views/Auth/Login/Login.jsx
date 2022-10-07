import React, { useState } from 'react';
import './scss/login-styles.css';
import { Button, Input, Loading, Spacer } from '@nextui-org/react';
import { loginFetch } from 'api';

function Login({
  setLogIsVisible,
  logIsVisible,
  forgPassShown,
  setForgPassShown,
}) {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [loading, setLoading] = useState(false);

  const loginStyle = {
    position: 'absolute',
    transform: logIsVisible ? 'translateX(0)' : 'translateX(-3000px)',
    // opacity: logIsVisible ? '1' : '0',
    transition: 'all 1s ease-in-out',
    zIndex: '3',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    loginFetch({ email, password: pwd });
    //! need to add success functionality: auto login and redirect? or success message and redirect to login?
  };

  return (
    <div className="login-overlay" style={loginStyle}>
      <div className="login-form-container raised">
        <form className="login" onSubmit={handleSubmit}>
          Welcome to
          <br />
          <h2>
            <i>Anti</i> <b>SocialSuite</b>
          </h2>
          <h1>Login</h1>
          <Input
            required
            type="text"
            id="email"
            placeholder="EMAIL"
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
          />
          <Spacer />
          <Input
            required
            type="password"
            id="password"
            placeholder="PASSWORD"
            onChange={(e) => setPwd(e.target.value)}
            aria-label="Password"
          />
          <Spacer />
          <Button type="submit">
            {!loading ? <>Login</> : <Loading size="sm" color="secondary" />}
          </Button>
        </form>
        <div className="login-footer">
          Forgot Password?{' '}
          <button
            className="create-account"
            onClick={() => setForgPassShown(true)}
          >
            Reset
          </button>
          <br />
          <button
            type="button"
            className="create-account"
            onClick={() => {
              setLogIsVisible(false);
            }}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
