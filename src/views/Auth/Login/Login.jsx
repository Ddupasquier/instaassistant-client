import React, { useState, useContext } from 'react';
import { UserContext } from 'contexts/userContext';
import './login-styles.scss';
import { Button, Input, Spacer } from '@nextui-org/react';
import { loginFetch } from 'api';

const Login = ({ setLogIsVisible, logIsVisible, setForgPassShown }) => {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const loginStyle = {
    position: 'absolute',
    transform: logIsVisible ? 'translateX(0)' : 'translateX(-3000px)',
    transition: 'all 1s ease-in-out',
    zIndex: '3',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginFetch({ email, password: pwd }, setUser);
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
          <Input.Password
            required
            type="password"
            id="password"
            placeholder="PASSWORD"
            onChange={(e) => setPwd(e.target.value)}
            aria-label="Password"
          />
          <Spacer />
          <Button type="submit">Login</Button>
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
};

export default Login;
