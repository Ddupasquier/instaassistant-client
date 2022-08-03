import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import './scss/login-styles.css';
import { Button, Input, Loading } from '@nextui-org/react';

function Login({ setVis, setSignVis, isVis, style }) {

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [loading, setLoading] = useState(false);

  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    //* api layer call for Login
    //! need to add success functionality: auto login and redirect? or success message and redirect to login?
  };

  return (
    <animated.div className="login-form-overlay" style={style}>
      <div className="login-form-container raised">
        <form className="login" onSubmit={HandleSubmit}>
          Hey, you&apos;re back!
          <h1>Login</h1>
          <Input type="text" id="username" placeholder="EMAIL" />
          <br />
          <Input type="password" id="password" placeholder="PASSWORD" />
          <br />
          <Button type="submit">{!loading ? (<>Login</>) : (<Loading size='sm'/>)}</Button>
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
  setVis: PropTypes.func,
  setSignVis: PropTypes.func,
  isVis: PropTypes.bool,
  style: PropTypes.func,
};
