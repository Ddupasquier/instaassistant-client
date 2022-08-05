import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import './scss/login-styles.css';
import { Button, Input, Loading, Spacer } from '@nextui-org/react';
import { loginFetch } from '../../api';

function Login({ setVis, setSignVis, isVis, style }) {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    loginFetch({ email: email, password: pwd })
    //! need to add success functionality: auto login and redirect? or success message and redirect to login?
  };

  return (
    <animated.div className="login-form-overlay" style={style}>
      <div className="login-form-container raised">
        <form
          className="login"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          Hey, you&apos;re back!
          <h1>Login</h1>
          <Input
            required="true"
            type="text"
            id="username"
            placeholder="EMAIL"
            autoComplete="new-password"
          />
          <Spacer />
          <Input
            required="true"
            type="password"
            id="password"
            placeholder="PASSWORD"
            onChange={(e) => setPwd(e.target.value)}
          />
          <Spacer />
          <Button type="submit">
            {!loading ? <>Login</> : <Loading size="sm" color="secondary" />}
          </Button>
        </form>
        <a href="/" className="forgot-password">
          Forgot Password?
        </a>
        <br />
        <button
          type="button"
          className="create-account"
          onClick={() => {
            setVis(!isVis);
            setSignVis(isVis);
          }}
          style={{ color: 'black' }}
        >
          Create Account
        </button>
      </div>
    </animated.div>
  );
}

export default Login;

Login.propTypes = {
  setVis: PropTypes.func,
  setSignVis: PropTypes.func,
  isVis: PropTypes.bool,
  style: PropTypes.func,
};
