import React from 'react';
import PropTypes from 'prop-types';
import { User } from '@nextui-org/react';

function UserIcon({ src, name, size }) {
  return (
    <User
      src={src}
      name={name}
      size={size}
    />
  );
}

export default UserIcon;

UserIcon.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired,
};
