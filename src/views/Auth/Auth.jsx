import React, { useState } from 'react';
import { Login } from 'views/Auth/Login';
import { SignUp } from 'views/Auth/SignUp';
import { ForgotPassword } from 'views/Auth/ForgotPassword';

function Auth() {
  const [logIsVisible, setLogIsVisible] = useState(true);
  const [forgPassShown, setForgPassShown] = useState(false);
  return (
    <>
      <div
        className="log-sign-container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: '0',
          left: '0',
          height: '100vh',
          width: '100vw',
        }}
      >
        <Login
          setLogIsVisible={setLogIsVisible}
          logIsVisible={logIsVisible}
          setForgPassShown={setForgPassShown}
          forgPassShown={forgPassShown}
        />
        <SignUp
          setLogIsVisible={setLogIsVisible}
          logIsVisible={logIsVisible}
          setForgPassShown={setForgPassShown}
          forgPassShown={forgPassShown}
        />
        <ForgotPassword
          setLogIsVisible={setLogIsVisible}
          logIsVisible={logIsVisible}
          setForgPassShown={setForgPassShown}
          forgPassShown={forgPassShown}
        />
      </div>
    </>
  );
}

export default Auth;
