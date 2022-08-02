import React from 'react';
import PropTypes from 'prop-types';
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

function Menu({ menuItemHovered, setMenuItemHovered, animateLogo }) {
  return (
    <>
      <nav className="menu">
        {menuItems.map((item) => (
          <div
            onMouseOver={() => setMenuItemHovered(item.name)}
            onFocus={() => setMenuItemHovered(item.name)}
            onMouseLeave={() => setMenuItemHovered('')}
            onBlur={() => setMenuItemHovered('')}
          >
            <MenuItem key={item.name} item={item} animateLogo={animateLogo} />
          </div>
        ))}
      </nav>
      <div className="pop-overs">
        {menuItems.map((item) => (
          <PopOver key={item.to} item={item} hovered={menuItemHovered} />
        ))}
      </div>
    </>
  );
}

export default Menu;

Menu.propTypes = {
  menuItemHovered: PropTypes.string.isRequired,
  setMenuItemHovered: PropTypes.func.isRequired,
  animateLogo: PropTypes.func.isRequired,
};
