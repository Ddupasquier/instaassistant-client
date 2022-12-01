import React, { useState } from 'react';
import './change-password-styles.scss';
import { Button, Input, Spacer, Text, Card } from '@nextui-org/react';
import { Logout } from 'api/index';
import Loader from 'components/Loader';
import BackgroundAnimation from 'components/Background/BackgroundAnimation';

function ChangePassword() {
  const [sending, setSending] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    if (data.new_password === data.confirm_password) {
      setSending(true);
      setTimeout(() => {
        // TODO do post to change password
        Logout();
        window.location.href = '/';
      }, 2000);
    }

    if (data.new_password !== data.confirm_password) {
      setSending(true);
      setTimeout(() => {
        alert('Passwords do not match');
        setSending(false);
      }, 2000);
    }
  };

  return (
    <>
    <BackgroundAnimation />
    <div
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card
        style={{ zIndex: 1 }}
        css={{
          background: '$myColor',
          width: 'fit-content',
          padding: '3rem',
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Text h3>Reset Password</Text>
          {sending ? (
            <Loader />
          ) : (
            <>
              <Spacer y={1} />
              <Input.Password
                type="password"
                placeholder="New Password"
                name="new_password"
                status="primary"
              />
              <Spacer y={1} />
              <Input.Password
                type="password"
                placeholder="Confirm Password"
                name="confirm_password"
                status="primary"
              />
              <Spacer y={1} />
              <Button type="submit" color="primary">
                Reset Password
              </Button>
            </>
          )}
        </form>
      </Card>
    </div>
    </>
  );
}

export default ChangePassword;
