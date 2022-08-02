/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './scss/signup-styles.css';
import { animated } from 'react-spring';
import { Home } from '../Home';

function SignUp({ setVis, setLogVis, isVis, style }) {
  const [isInvited, setIsInvited] = useState(true);

  return (
    <animated.div className="signup-form-overlay" style={style}>
      <div className="signup-form-container">
        {isInvited ? (
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
        ) : (
          <Home isInvited={isInvited} setIsInvited={setIsInvited} />
        )}
        {isInvited ? (
          <>
            <a href="/" className="forgot-password">
              Forgot Password?
            </a>
            <br />
          </>
        ) : null}
        <button
          type="button"
          className="create-account"
          onClick={() => {
            setVis(!isVis);
            setLogVis(isVis);
          }}
        >
          Already Have An Account?
        </button>
      </div>
    </animated.div>
  );
}

export default SignUp;

SignUp.propTypes = {
  setVis: PropTypes.func,
  setLogVis: PropTypes.func,
  isVis: PropTypes.bool,
  style: PropTypes.func,
};
