import React, { useState } from 'react';
import './Appscss/app-styles.css';
import { useTransition } from 'react-spring';
import { Outlet } from 'react-router-dom';
import { Login } from './View/Login';
import { SignUp } from './View/SignUp';
import { Header } from './Components/Header';
// import { Footer } from './Components/Footer';
import { Menu } from './Components/Menu';

function App() {
  const [signIsVisible, setSignIsVisible] = useState(false);
  const [logIsVisible, setLogIsVisible] = useState(true);

  // TEMP VALUE
  const [user] = useState(true);

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
          <Header />
          <Menu />
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
