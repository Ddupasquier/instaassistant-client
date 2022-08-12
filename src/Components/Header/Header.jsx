import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@nextui-org/react';
import './scss/header-styles.css';
import { Logout } from '../../api';
import LogoAnimation from './LogoAnimation';

function Header({ menuSelected }) {
  const capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <header>
      <LogoAnimation menuSelected={menuSelected} />
      <div className="site-name">
        <i>Marcus</i>
        <b>Bot</b>
      </div>
      <div className="username">
        {capFirstLetter('Company Name')} {'  '}
        <Button
          href="/"
          onClick={Logout}
          size="xs"
          color="warning"
          css={{ marginLeft: '1rem' }}
        >
          Logout
        </Button>
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  menuSelected: PropTypes.string.isRequired,
};
