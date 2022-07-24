import React, { useState } from 'react';
import './Appscss/app-styles.css';
import { useTransition } from 'react-spring';
import { Outlet } from 'react-router-dom';
import { Login } from './View/Login';
import { SignUp } from './View/SignUp';
import { Header } from './Components/Header';
import { Menu } from './Components/Menu';

function App() {
  const [signIsVisible, setSignIsVisible] = useState(false);
  const [logIsVisible, setLogIsVisible] = useState(true);
  const [menuItemHovered, setMenuItemHovered] = useState('');
  const [billingSelected, setBillingSeleted] = useState(false);
  // write state to update to true if billing has been clicked
  // write function to update state to false if billing has been clicked

  // TEMP VALUE
  const [user] = useState(true);

  const animateLogo = (name) => {
    if (name === 'Billing') {
      setBillingSeleted(true);
    } else {
      setBillingSeleted(false);
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
          <Header billingSelected={billingSelected} />
          <Menu
            menuItemHovered={menuItemHovered}
            setMenuItemHovered={setMenuItemHovered}
            animateLogo={animateLogo}
          />
          <Outlet />
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
        </>
      )}
    </div>
  );
}

export default App;
