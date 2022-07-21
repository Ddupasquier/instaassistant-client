import React from 'react';
import PropTypes from 'prop-types';
import './scss/signup-styles.css';
import { animated } from 'react-spring';

function SignUp({
  setVis, setLogVis, isVis, style,
}) {
  return (
    <animated.div className="signup-form-overlay" style={style}>
      <div className="signup-form-container">
        <form className="sign-up">
          Create an account!
          <h1>Sign Up</h1>
          <input type="text" id="username" placeholder="EMAIL" />
          <br />
          <input type="password" id="password" placeholder="PASSWORD" />
          <br />
          <input
            type="confirmPassword"
            id="confirmPassword"
            placeholder="CONFIRM PASSWORD"
          />
          <br />
          <button type="submit">Sign Up</button>
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
            setLogVis(isVis);
          }}
        >
          Already Have An Account
        </button>
      </div>
    </animated.div>
  );
}

export default SignUp;

SignUp.propTypes = {
  setVis: PropTypes.func.isRequired,
  setLogVis: PropTypes.func.isRequired,
  isVis: PropTypes.bool.isRequired,
  style: PropTypes.func.isRequired,
};
