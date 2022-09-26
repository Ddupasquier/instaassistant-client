import React from 'react';
import { User } from '@nextui-org/react';

function UserIcon({ src, name, size }) {
  return <User src={src} name={name} size={size} />;
}

export default UserIcon;
