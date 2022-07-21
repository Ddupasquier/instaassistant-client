import React, { useState } from 'react';
import { BsGearWideConnected } from 'react-icons/bs';
import { FaUserAlt, FaUserFriends } from 'react-icons/fa';
import { VscGraphLine } from 'react-icons/vsc';
import MenuItem from './MenuItem';
import PopOver from './PopOver';

import './scss/menu-styles.css';

const menuItems = [
  {
    name: 'Billing',
    to: '/billing',
    Icon: BsGearWideConnected,
  },
  {
    name: 'Profile',
    to: '/profile',
    Icon: FaUserAlt,
  },
  {
    name: 'Accounts',
    to: '/accounts',
    Icon: FaUserFriends,
  },
  {
    name: 'Metrics',
    to: '/metrics',
    Icon: VscGraphLine,
  },
];

function Menu() {
  const [hovered, setHovered] = useState('');

  return (
    <>
      <nav className="menu">
        {menuItems.map((item) => (
          <div
            onMouseOver={() => setHovered(item.name)}
            onFocus={() => setHovered(item.name)}
            onMouseLeave={() => setHovered('')}
            onBlur={() => setHovered('')}
          >
            <MenuItem key={item.to} item={item} />
          </div>
        ))}
      </nav>
      <div className="pop-overs">
        {menuItems.map((item) => (
          <PopOver key={item.to} item={item} hovered={hovered} />
        ))}
      </div>
    </>
  );
}

export default Menu;
