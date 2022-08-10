import React from 'react';
import { UserIcon } from '../UserIcon';
import { Card, Text } from '@nextui-org/react';
import { Link } from 'react-router-dom';

const AccountCardNext = () => {
  return (
    <Link to="/account">
      <Card
        isHoverable
        isPressable
        variant="flat"
        to="/account"
        css={{ p: '$5', mw: '250px' }}
      >
        <Card.Header>
          <UserIcon
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            name="@Username"
            size="xl"
          />
        </Card.Header>
        <Card.Body
          css={{
            display: 'none',
            py: '$2',
            '@xs': {
              display: 'flex',
            },
            '@sm': {
              display: 'flex',
            },
          }}
        >
          <Text>
            Make beautiful websites regardless of your design experience.
          </Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default AccountCardNext;
