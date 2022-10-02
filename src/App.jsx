import React, { useState, useContext } from 'react';
import 'GlobalStyles/global-styles.css';
import { Outlet } from 'react-router-dom';
import { Login } from 'View/Auth/Login';
import { SignUp } from 'View/Auth/SignUp';
import { Header } from 'Components/Header';
import { Menu } from 'Components/Menu';
import { ForgotPassword } from 'View/Auth/ForgotPassword';
import BackgroundAnimation from 'Components/Background/BackgroundAnimation';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeContext } from 'themeContext';

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      gradient:
        'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#af6eff',
      myColor: 'rgba(95, 95, 95, 0.55)',
      menu: 'rgb(34, 34, 34)',
      font: '#fff',
      solid: '#000000',
      invert: 'invert(0)',
    },
  },
});

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      gradient:
        'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',
      myColor: 'rgba(255, 255, 255, .7)',
      menu: 'rgb(212, 212, 212)',
      font: '#000',
      solid: '#ffffff',
      invert: 'invert(1)',
    },
  },
});

function App() {
  const { isDark } = useContext(ThemeContext);

  const [logIsVisible, setLogIsVisible] = useState(true);
  const [forgPassShown, setForgPassShown] = useState(false);
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
    <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
      <div className="App">
        {localStorage.getItem('token') ? (
          <div className="app">
            <Header menuSelected={menuSelected} />
            <Menu
              menuItemHovered={menuItemHovered}
              setMenuItemHovered={setMenuItemHovered}
              animateLogo={animateLogo}
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
    </NextUIProvider>
  );
}

export default App;
