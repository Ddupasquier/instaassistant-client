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
      }}
    >
      <LogoAnimation menuSelected={menuSelected} />
      <div className="site-name" style={{color: theme === darkTheme ? 'rgb(80, 255, 255)' : 'black'}}>
        <i>Anti</i>
        <b>SocialSuite</b>
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
          {localStorage.getItem('email').replace(/['"]+/g, '')} {'  '}
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
