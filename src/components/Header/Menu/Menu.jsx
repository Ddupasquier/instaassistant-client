import React from 'react';
import { animated } from 'react-spring';
import './scss/menu-styles.css';

const Nav = ({ isOpen, style }) => {
  return (
    <>
      {isOpen ? (
        <animated.div className="menu" style={style}>
          <div>
            <a href="/">Home</a>
          </div>
          <div>
            <a href="/">About</a>
          </div>
          <div>
            <a href="/">Contact</a>
          </div>
          <div>
            <a href="/">Login</a>
          </div>
          <div>
            <a href="/">Sign Up</a>
          </div>
        </animated.div>
      ) : (
        null
      )}
    </>
  );
};

export default Nav;
