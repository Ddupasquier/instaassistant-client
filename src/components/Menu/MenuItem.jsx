import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from '@nextui-org/react';

function MenuItem({ item }) {
  const [hover, setHover] = useState(false);

  const NavItem = styled('div', {
    color: '$font',
    backgroundColor: '$menu',
    '&:hover': {
      backgroundColor: '$menuHover',
    },
  });

  return (
    <NavLink
      name={item.name}
      role="menuitem"
      to={item.to}
      exact="true"
      activeclassname="active"
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
    >
      <NavItem className="menu-item">
        <item.Icon />
      </NavItem>
    </NavLink>
  );
}

export default MenuItem;
