import React, { useState } from 'react';
import 'globals/global-classes.css';
import { Outlet } from 'react-router-dom';
import { Login } from 'views/Auth/Login';
import { SignUp } from 'views/Auth/SignUp';
import { Header } from 'components/Header';
import { Menu } from 'components/Menu';
import { ForgotPassword } from 'views/Auth/ForgotPassword';
import BackgroundAnimation from 'components/Background/BackgroundAnimation';

function App() {
  const [logIsVisible, setLogIsVisible] = useState(true);
  const [forgPassShown, setForgPassShown] = useState(false);
  const [menuItemHovered, setMenuItemHovered] = useState('');

  // const animateLogo = (name) => {
  //   if (name === 'Billing') {
  //     setMenuSeleted('Billing');
  //   } else if (name === 'Profile') {
  //     setMenuSeleted('Profile');
  //   } else if (name === 'Accounts') {
  //     setMenuSeleted('Accounts');
  //   } else {
  //     setMenuSeleted('');
  //   }
  // };

  return (
    <div className="App">
      {localStorage.getItem('token') ? (
        <div className="app">
          <Header />
          <Menu
            menuItemHovered={menuItemHovered}
            setMenuItemHovered={setMenuItemHovered}
          />

          <Outlet />
          <BackgroundAnimation />
        </div>
      ) : (
        <>
          <BackgroundAnimation />
          <div
            className="log-sign-container"
            style={{
              width: '100vw',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
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
      )}
    </div>
  );
}

export default App;
