import React, { useState } from 'react';
import { useTransition } from 'react-spring';
import './scss/app-styles.css';
import { Outlet } from 'react-router-dom';
import Login from './view/Login';
import SignUp from './view/SignUp';
import Header from './components/Header';
import Footer from './view/Footer';
import Menu from './components/Header/Menu/Menu';

const App = () => {
  const [signIsVisible, setSignIsVisible] = useState(false);
  const [logIsVisible, setLogIsVisible] = useState(true);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        <>
          <Header />
          <Menu />
          <Outlet />
          <Footer />
        </>
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
          })}
        </>
      )}
    </div>
  );
};

export default App;
