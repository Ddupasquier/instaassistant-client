import React from 'react';
import './scss/header-styles.css';
import * as HiIcons from 'react-icons/hi';
import Menu from './Menu';

const Header = ({ anim, isMenuOpen, setIsMenuOpen }) => {
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className="nav-ham" onClick={handleToggle}>
          <HiIcons.HiMenu />
        </div>
        <span>InstantAssisstant</span>
        <div className="username">Username here</div>
      </header>
      {anim((style, item) => {
          if (item) {
            return (
              <Menu toggle={handleToggle} isOpen={isMenuOpen} style={style} />
            );
          }
        })}
    </>
  );
};

export default Header;
