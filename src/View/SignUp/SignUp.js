/* eslint-disable object-curly-newline */
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./scss/signup-styles.css";
import { animated } from "react-spring";
import { Home } from "../Home";
import { Button, Input, Loading } from "@nextui-org/react";
import { CreateUserPost } from "../../api";

function SignUp({ setVis, setLogVis, isVis, style }) {
  const [isInvited, setIsInvited] = useState(true);

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdconf, setPwdconf] = useState("");

  const [loading, setLoading] = useState(false);

  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    CreateUserPost({ email: email, password: pwd });
    //! need to add success functionality: auto login and redirect? or success message and redirect to login?
  };

  return (
    <animated.div className="signup-form-overlay" style={style}>
      <div className="signup-form-container">
        <form className="sign-up" onSubmit={HandleSubmit}>
          Create your account
          <h1>Sign Up</h1>
          <Input
            required
            type="text"
            id="username"
            placeholder="EMAIL"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <Input
            required
            type="password"
            id="password"
            placeholder="PASSWORD"
            onChange={(e) => setPwd(e.target.value)}
          />
          <br />
          <Input
            required
            type="password"
            id="confirmPassword"
            placeholder="CONFIRM PASSWORD"
            onChange={(e) => setPwdconf(e.target.value)}
          />
          <br />
          <Button type="submit">
            {!loading ? <>Sign Up</> : <Loading size="sm" />}
          </Button>
        </form>
        <>
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
            Already Have An Account?
          </button>
        </>
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
