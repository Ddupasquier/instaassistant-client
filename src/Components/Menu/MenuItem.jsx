import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from '@nextui-org/react';

function MenuItem({ item, animateLogo }) {
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
      to={item.to}
      exact="true"
      activeclassname="active"
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
      onClick={() => animateLogo(item.name)}
    >
      <NavItem className="menu-item" aria-labelledby={item.name}>
        <item.Icon />
      </NavItem>
    </NavLink>
  );
}

export default MenuItem;
