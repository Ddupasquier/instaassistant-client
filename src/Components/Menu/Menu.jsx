import React from 'react';
import PropTypes from 'prop-types';
import {
  FaUserAlt,
  FaUserFriends,
  FaQuestionCircle,
  FaMoneyBill,
} from 'react-icons/fa';
import MenuItem from './MenuItem';
import PopOver from './PopOver';

import './scss/menu-styles.css';

const menuItems = [
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
    name: 'Billing',
    to: '/billing',
    Icon: FaMoneyBill,
  },
  {
    name: 'FAQ',
    to: '/FAQ',
    Icon: FaQuestionCircle,
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
            key={item.name}
          >
            <MenuItem item={item} animateLogo={animateLogo} />
          </div>
        ))}
      </nav>
      {window.innerWidth > 760 ? (
        <div className="pop-overs">
          {menuItems.map((item) => (
            <PopOver key={item.to} item={item} hovered={menuItemHovered} />
          ))}
        </div>
      ) : null}
    </>
  );
}

export default Menu;

Menu.propTypes = {
  menuItemHovered: PropTypes.string.isRequired,
  setMenuItemHovered: PropTypes.func.isRequired,
  animateLogo: PropTypes.func.isRequired,
};
