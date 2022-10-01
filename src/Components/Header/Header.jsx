import React from 'react';
import { Button, Text, styled } from '@nextui-org/react';
import './scss/header-styles.css';
import { Logout } from '../../api';
import LogoAnimation from './LogoAnimation';

function Header({ menuSelected }) {
  const Header = styled('header', {
    backgroundColor: '$menu',
  });

  const LogoName = styled('div', {
    color: '$font',
  });

  return (
    <Header>
      <LogoAnimation menuSelected={menuSelected} />
      <LogoName className="site-name">
        <i>Anti</i>
        <b>SocialSuite</b>
      </LogoName>
      <div className="username">
        <Text
          h1
          size={30}
          css={{
            textGradient: '45deg, $blue600 -20%, $pink600 50%',
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
