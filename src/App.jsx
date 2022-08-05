import React, { useState } from 'react';
import './Appscss/app-styles.css';
import { useTransition } from 'react-spring';
import { Outlet } from 'react-router-dom';
import { Login } from './View/Login';
import { SignUp } from './View/SignUp';
import { Header } from './Components/Header';
import { Menu } from './Components/Menu';
import Background from './Components/Background';

function App({ setTheme, lightTheme, darkTheme }) {
  const [signIsVisible, setSignIsVisible] = useState(false);
  const [logIsVisible, setLogIsVisible] = useState(true);
  const [menuItemHovered, setMenuItemHovered] = useState('');
  const [menuSelected, setMenuSeleted] = useState('');

  // TEMP VALUE
  const [user] = useState(false);

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

  const transLog = useTransition(logIsVisible, {
    from: { transform: 'translate3d(0, -100%, 0)', zIndex: '0' },
    enter: { transform: 'translate3d(0, 0, 0)', zIndex: '-1' },
    leave: { transform: 'translate3d(0, -100%, 0)', zIndex: '0' },
  });

  const tranSign = useTransition(signIsVisible, {
    from: { transform: 'translate3d(0, 100%, 0)', zIndex: '0' },
    enter: { transform: 'translate3d(0, 0, 0)', zIndex: '-1' },
    leave: { transform: 'translate3d(0, 100%, 0)', zIndex: '0' },
  });

  return (
    <div className="App">
      {user ? (
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
          <Background
            style={{
              position: 'fixed',
              bottom: '0',
              height: '120vh',
              width: '100vw',
            }}
          />
        </div>
      ) : (
        <>
          {transLog((style, item) => {
            if (item) {
              return (
                <Login
                  setVis={setLogIsVisible}
                  isVis={logIsVisible}
                  setSignVis={setSignIsVisible}
                  style={style}
                />
              );
            }
            return null;
          })}
          {tranSign((style, item) => {
            if (item) {
              return (
                <SignUp
                  setVis={setSignIsVisible}
                  isVis={signIsVisible}
                  setLogVis={setLogIsVisible}
                  style={style}
                />
              );
            }
            return null;
          })}
          <Background
            style={{
              position: 'fixed',
              bottom: '0',
              height: '120vh',
              width: '100vw',
              zIndex: '-100',
            }}
          />
        </>
      )}
    </div>
  );
}

export default App;
