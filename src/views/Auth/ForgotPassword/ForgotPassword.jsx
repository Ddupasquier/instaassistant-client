import React, { useState } from 'react';
import './password-styles.scss';
import { Button, Input, Spacer } from '@nextui-org/react';
import { GenerateResetToken } from 'api/index';
import { Logout } from 'api';

function ForgotPassword({ forgPassShown, setForgPassShown }) {
  const [email, setEmail] = useState('');

  const passwordStyle = {
    position: 'absolute',
    transform: forgPassShown ? 'translateY(0)' : 'translateY(-3000px)',
    transition: 'all 1s ease-in-out',
    zIndex: '4',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    GenerateResetToken({ email });
    Logout();
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
            id="entire-email"
            placeholder="ENTIRE EMAIL ADDRESS"
            aria-label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Spacer />
          <Button type="submit">Reset</Button>
        </form>
        <div className="password-footer">
          <button
            className="create-account"
            onClick={() => setForgPassShown(false)}
          >
            I didn&apos;t forget my password
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
