import React from 'react';
import PropTypes from 'prop-types';
import { User } from '@nextui-org/react';

function UserIcon({ src, name, size }) {
  return (
    <User
      src={src}
      name={name}
      size={size}
      // css={{ color: 'white' }}
    />
  );
}

export default UserIcon;

UserIcon.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired,
};
