import React from 'react';
import { Button, Text, styled } from '@nextui-org/react';
import './header-styles.scss';
import { Logout } from 'api';

function Header() {
  const Header = styled('header', {
    backgroundColor: '$menu',
  });

  return (
    <Header>
      <img
        src="https://advanced-web-technology-c3582e48.s3.us-west-1.amazonaws.com/AntiSocialSuite/img/antiSOCIALsuite.svg"
        alt="ass-logo"
      />
      {localStorage.getItem('email') && (
        <div className="header-right">
          <Text
            h1
            size={20}
            css={{
              color: '$font',
            }}
            style={{ zIndex: 1 }}
            weight="bold"
          >
            {localStorage.getItem('email').replace(/['"]+/g, '')}
          </Text>
          <Button
            href="/"
            onPress={Logout}
            size="xs"
            color="warning"
            css={{ margin: '0 1rem' }}
            rounded
          >
            Logout
          </Button>
        </div>
      )}
    </Header>
  );
}

export default Header;
