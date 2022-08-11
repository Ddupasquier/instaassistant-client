import React from 'react';
import PropTypes from 'prop-types';
import './scss/header-styles.css';
import { Logout } from '../../api';
import LogoAnimation from './LogoAnimation';

function Header({ menuSelected }) {
  return (
    <header>
      <LogoAnimation menuSelected={menuSelected} />
      <div className="site-name">
        <i>Marcus</i>
        <b>Bot</b>
      </div>
      <div className="username">
        Username here |{' '}
        <a href="/" onClick={Logout}>
          Logout
        </a>
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  menuSelected: PropTypes.string.isRequired,
};
