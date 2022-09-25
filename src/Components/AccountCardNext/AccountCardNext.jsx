import React from 'react';
import { UserIcon } from '../UserIcon';
import { Card, Text } from '@nextui-org/react';
import { Link } from 'react-router-dom';

const AccountCardNext = ({ username, path }) => {
  const text = 'Make beautiful websites regardless of your design experience.';

  const truncateName = (username) => {
    if (username.length > 14) {
      return username.substring(0, 14) + '...';
    }
    return username;
  };

  const truncateText = (text) => {
    if (text.length > 65) {
      return text.substring(0, 65) + '...';
    }
    return text;
  };

  return (
    <Link to={path}>
      <Card
        isHoverable
        isPressable
        variant="flat"
        to={path}
        css={{ p: '$5', mw: '250px' }}
      >
        <Card.Header>
          <UserIcon
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            name={'@' + truncateName(username)}
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
          <Text>{truncateText(text)}</Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default AccountCardNext;
