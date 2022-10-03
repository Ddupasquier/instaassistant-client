import React, { useState } from 'react';
import 'GlobalStyles/global-styles.css';
import { Outlet } from 'react-router-dom';
import { Login } from 'View/Auth/Login';
import { SignUp } from 'View/Auth/SignUp';
import { Header } from 'Components/Header';
import { Menu } from 'Components/Menu';
import { ForgotPassword } from 'View/Auth/ForgotPassword';
import BackgroundAnimation from 'Components/Background/BackgroundAnimation';

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
