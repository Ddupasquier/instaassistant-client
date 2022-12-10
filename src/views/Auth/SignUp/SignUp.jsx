import React, { useState } from 'react';
import './signup-styles.scss';
import { Button, Input, Loading, Spacer } from '@nextui-org/react';
import { CreateUserPost } from 'api';

function SignUp({ setLogIsVisible, logIsVisible, setForgPassShown }) {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwdconf, setPwdconf] = useState('');
  const [loading, setLoading] = useState(false);

  // const [inviteCode, setInviteCode] = useState(false);
  // const [code, setCode] = useState('');

  // useEffect(() => {
  //   if (code.length === 10) {
  //     setInviteCode(true);
  //   }
  // }, [code]);

  const signupStyle = {
    position: 'absolute',
    transform: logIsVisible ? 'translateX(3000px)' : 'translateX(0)',
    transition: 'all 1s ease-in-out',
    zIndex: '3',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if pwdconf is not equal to pwd, alert user
    if (pwd !== pwdconf) {
      alert('Passwords do not match');
      return;
    }
    setLoading(true);
    CreateUserPost({ email, password: pwd }).then(setLogIsVisible(true));
  };

  return (
    <div className="signup-overlay" style={signupStyle}>
      <div className="signup-form-container">
        <form className="sign-up" onSubmit={handleSubmit}>
          Welcome to
          <br />
          <h2>
            <i>Anti</i> <b>SocialSuite</b>
          </h2>
          <h1>Sign Up</h1>
          {/* {!inviteCode ? (
            <Input
              required
              type="text"
              id="invite-code"
              placeholder="INVITE CODE"
              onChange={(e) => setCode(e.target.value)}
              aria-label="Invite Code"
            />
          ) : ( */}
            <>
              <Input
                required
                type="text"
                id="username"
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
              <Input.Password
                required
                type="password"
                id="confirmPassword"
                placeholder="CONFIRM PASSWORD"
                onChange={(e) => setPwdconf(e.target.value)}
                aria-label="Confirm Password"
              />
              <Spacer />
              <Button type="submit">
                {!loading ? (
                  <>Sign Up</>
                ) : (
                  <Loading size="sm" color="secondary" />
                )}
              </Button>
            </>
          {/* )} */}
        </form>
        <div className="signup-footer">
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
              setLogIsVisible(true);
            }}
            style={{ color: 'black' }}
          >
            Already Have An Account?
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
