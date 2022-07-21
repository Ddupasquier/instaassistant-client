import React from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import './scss/login-styles.css';

function Login({
  setVis, setSignVis, isVis, style,
}) {
  return (
    <animated.div className="login-form-overlay" style={style}>
      <div className="login-form-container raised">
        <form className="login">
          Hey, you&apos;re back!
          <h1>Login</h1>
          <input type="text" id="username" placeholder="EMAIL" />
          <br />
          <input type="password" id="password" placeholder="PASSWORD" />
          <br />
          <button type="submit">Login</button>
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
        >
          Create Account
        </button>
      </div>
    </animated.div>
  );
}

export default Login;

Login.propTypes = {
  setVis: PropTypes.func.isRequired,
  setSignVis: PropTypes.func.isRequired,
  isVis: PropTypes.bool.isRequired,
  style: PropTypes.func.isRequired,
};
