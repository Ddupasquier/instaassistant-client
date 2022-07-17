import React from 'react';
import './scss/header-styles.css';
// import * as HiIcons from 'react-icons/hi';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className="spacer" onClick={handleToggle}>
          {''}
        </div>
        <span>InstantAssisstant</span>
        <div className="username">Username here</div>
      </header>
    </>
  );
};

export default Header;
