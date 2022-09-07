import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, useTheme } from '@nextui-org/react';
import './scss/header-styles.css';
import { Logout } from '../../api';
import LogoAnimation from './LogoAnimation';

function Header({ menuSelected, theme, darkTheme }) {
  const capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <header
      style={{
        backgroundColor:
          theme === darkTheme ? 'rgb(34, 34, 34)' : 'rgb(212, 212, 212)',
        transition: '1s',
        // filter: theme !== darkTheme ? 'invert(1)' : 'invert(0)',
      }}
    >
      <LogoAnimation menuSelected={menuSelected} />
      <div className="site-name">
        <i>Anti</i>
        <b>Social Suite</b>
      </div>
      <div className="username">
      <Text
        h1
        size={30}
        css={{
        textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        style={{ zIndex: 1 }}
        weight="bold"
        >
          {capFirstLetter('Company Name')} {'  '}
        </Text>
        

        <Button
          href="/"
          onPress={Logout}
          size="xs"
          color="warning"
          css={{ marginLeft: '1rem' }}
          rounded
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
