import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './change-password-styles.scss';
import { Button, Input, Spacer, Text, Card } from '@nextui-org/react';
import { Logout, CheckKeyValid, ResetPassword } from 'api';
import Loader from 'components/Loader';
import BackgroundAnimation from 'components/Background/BackgroundAnimation';

function ChangePassword() {
  const { reset_token } = useParams();
  const [sending, setSending] = useState(false);
  const [validKey, setValidKey] = useState(null);

  useEffect(() => {
    CheckKeyValid(reset_token).then((res) => {
      if (res.success === true) {
        setValidKey(true);
      } else {
        setValidKey(false);
      }
    });
  }, [reset_token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    if (data.new_password === data.confirm_password) {
      ResetPassword({ password: data.new_password });
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
      {validKey === false ? (
        <div>Sorry, sucks to suck</div>
      ) : (
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
              {validKey === null ? (
                <Loader />
              ) : (
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
              )}
            </Card>
          </div>
        </>
      )}
    </>
  );
}

export default ChangePassword;
