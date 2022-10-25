import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import { IoChevronBack } from 'react-icons/io5';

const BackButton = () => {
      const backNavigate = useNavigate();
  return (

      <Button
        size="sm"
        color="warning"
        css={{ padding: '0', minWidth: '2rem' }}
        rounded
            onClick={() => backNavigate(-1)}
      >
        <IoChevronBack size="20" />
      </Button>
  );
};

export default BackButton;
