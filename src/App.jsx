import React, { useState } from 'react';
import 'GlobalStyles/global-styles.css';
import { Outlet } from 'react-router-dom';
import { Login } from 'View/Login';
import { SignUp } from 'View/SignUp';
import { Header } from 'Components/Header';
import { Menu } from 'Components/Menu';
import Background from 'Components/Background';

function App({ setTheme, lightTheme, darkTheme, theme }) {
  const [logIsVisible, setLogIsVisible] = useState(true);
  const [menuItemHovered, setMenuItemHovered] = useState('');
  const [menuSelected, setMenuSeleted] = useState('');

  const animateLogo = (name) => {
    if (name === 'Billing') {
      setMenuSeleted('Billing');
    } else if (name === 'Profile') {
      setMenuSeleted('Profile');
    } else if (name === 'Accounts') {
      setMenuSeleted('Accounts');
    } else {
      setMenuSeleted('');
    }
  };

  return (
    <div className="App">
      {localStorage.getItem('token') ? (
        <div className="app">
          <Header menuSelected={menuSelected} />
          <Menu
            menuItemHovered={menuItemHovered}
            setMenuItemHovered={setMenuItemHovered}
            animateLogo={animateLogo}
            setTheme={setTheme}
            lightTheme={lightTheme}
            darkTheme={darkTheme}
          />

          <Outlet />
          <Background theme={theme} darkTheme={darkTheme} />
        </div>
      ) : (
        <>
          <Background
            style={{
              position: 'fixed',
              bottom: '0',
              height: '120vh',
              width: '100vw',
              zIndex: '1',
            }}
          />
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
            />
            <SignUp
              setLogIsVisible={setLogIsVisible}
              logIsVisible={logIsVisible}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
