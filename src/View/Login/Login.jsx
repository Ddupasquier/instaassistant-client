import React from 'react';
import {animated} from 'react-spring'
import './scss/login-styles.css';

const Login = ({ setVis, setSignVis, isVis, style }) => {
  return (
    <animated.div className="login-form-overlay" style={style}>
      <div className="login-form-container raised">
        <form className="login">
          Hey, you're back!
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
};

export default Login;
