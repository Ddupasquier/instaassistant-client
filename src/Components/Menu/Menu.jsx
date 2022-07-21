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

const Menu = () => {
  const [hovered, setHovered] = useState('');
  console.log(hovered);

  return (
    <>
      <div className="menu">
        {menuItems.map((item) => (
          <div
            onMouseOver={() => setHovered(item.name)}
            onMouseLeave={() => setHovered('')}
          >
            <MenuItem key={item.to} item={item} />
          </div>
        ))}
      </div>
      <div className="pop-overs">
        {menuItems.map((item) => (
          <PopOver key={item.to} item={item} hovered={hovered}/>
        ))}
      </div>
    </>
  );
};

export default Menu;
