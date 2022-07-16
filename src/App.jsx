import React, { useState } from 'react';
import { useTransition } from 'react-spring';
import './scss/app-styles.css';
import { Outlet } from 'react-router-dom';
import Login from './view/Login';
import SignUp from './view/SignUp';
import Header from './view/Header';
import Footer from './view/Footer';

const App = () => {
  const [signIsVisible, setSignIsVisible] = useState(false);
  const [logIsVisible, setLogIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // TEMP VALUE
  const [user] = useState(false);

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

  const animMenu = useTransition(isMenuOpen, {
    from: { opacity: 0, transform: 'translate3d(0, 1000%, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' },
  });

  // const transLog = useTransition(logIsVisible, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  // });
  // const tranSign = useTransition(signIsVisible, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  // });

  return (
    <div className="App">
      {user ? (
        <>
          <Header
            anim={animMenu}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
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
