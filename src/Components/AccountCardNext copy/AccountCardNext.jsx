import React from 'react';
import { UserIcon } from '../UserIcon';
import { Card, Text } from '@nextui-org/react';
import { Link } from 'react-router-dom';


const AccountCardNext = ({username, path}) => {
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
            name={"@" + username}
            size="xl"
          />
        </Card.Header>
        <Card.Body css={{ py: '$2' }}>
          <Text>
            Make beautiful websites regardless of your design experience.
          </Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default AccountCardNext;
