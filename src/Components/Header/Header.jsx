import React from 'react';
import { Button, Text, styled } from '@nextui-org/react';
import './scss/header-styles.css';
import { Logout } from 'api';
import Logo from './Logo';

function Header() {
  const Header = styled('header', {
    backgroundColor: '$menu',
  });

  const LogoName = styled('div', {
    color: '$font',
  });

  return (
    <Header>
      <Logo />
      <LogoName className="site-name">
        <i>Anti</i>
        <b>SocialSuite</b>
      </LogoName>
      <div className="username">
        <Text
          h1
          size={20}
          css={{
            color: '$font',
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
    </Header>
  );
}

export default Header;
