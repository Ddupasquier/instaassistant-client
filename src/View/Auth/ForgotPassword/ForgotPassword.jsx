import React from 'react';
import './scss/password-styles.css';
import { Button, Input, Spacer } from '@nextui-org/react';

function ForgotPassword({ forgPassShown, setForgPassShown }) {
  const passwordStyle = {
    position: 'absolute',
    transform: forgPassShown ? 'translateY(0)' : 'translateY(-3000px)',
    transition: 'all 1s ease-in-out',
    zIndex: '4',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoading(true);
    // passwordFetch({ email, password: pwd });
    //! need to add success functionality: auto password and redirect? or success message and redirect to password?
  };

  return (
    <div className="password-overlay" style={passwordStyle}>
      <div className="password-form-container raised">
        <form className="password" onSubmit={handleSubmit}>
          Welcome to
          <br />
          <h2>
            <i>Anti</i> <b>SocialSuite</b>
          </h2>
          <h1>Forgot your password?</h1>
          <Input
            required
            type="text"
            id="email"
            placeholder="ENTIRE EMAIL ADDRESS"
            aria-label="Email"
          />
          <Spacer />
          <Button type="submit">Reset</Button>
        </form>
        <div className="password-footer">
          <button className="create-account" onClick={() => setForgPassShown(false)}>
            I didn&apos;t forget my password
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
