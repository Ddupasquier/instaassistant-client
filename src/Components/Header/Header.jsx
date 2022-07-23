import React from 'react';
import './scss/header-styles.css';

function Header() {
  const boxOne = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    backgroundColor: '#00fbff',
    borderRadius: '2px',
    width: '1rem',
    height: '1.5rem',
  };

  const boxTwo = {
    position: 'absolute',
    top: '13px',
    left: '15px',
    backgroundColor: '#50ffffc2',
    borderRadius: '2px',
    width: '1rem',
    height: '1.5rem',
  };

  const boxThree = {
    position: 'absolute',
    top: '16px',
    left: '20px',
    backgroundColor: '#50ffff79',
    borderRadius: '2px',
    width: '1rem',
    height: '1.5rem',
  };

  const boxFour = {
    position: 'absolute',
    top: '19px',
    left: '25px',
    backgroundColor: '#50ffff2d',
    borderRadius: '2px',
    width: '1rem',
    height: '1.5rem',
  };

  return (
    <header>
      <div className="logo">
        <div className="box-one" style={boxOne} />
        <div className="box-two" style={boxTwo} />
        <div className="box-three" style={boxThree} />
        <div className="box-four" style={boxFour} />
      </div>
      <div className="site-name">
        <i>Instant</i>
        <b>Assistant</b>
      </div>
      <div className="username">Username here</div>
    </header>
  );
}

export default Header;
