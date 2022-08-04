import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FaUserAlt,
  FaUserFriends,
  FaQuestionCircle,
  FaMoneyBill,
} from 'react-icons/fa';
import { BsSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import MenuItem from './MenuItem';
import PopOver from './PopOver';

import './scss/menu-styles.css';
import { Switch } from '@nextui-org/react';

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

function Menu({
  menuItemHovered,
  setMenuItemHovered,
  animateLogo,
  setTheme,
  lightTheme,
  darkTheme,
}) {
  const [checked, setChecked] = useState(true);

  const handleThemeChange = () => {
    setChecked(!checked);
    setTheme(checked ? lightTheme : darkTheme);
  }

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
        <div className="menu-bottom">
          {checked ? (
            <BsFillMoonStarsFill style={{ color: 'rgb(80, 255, 255)' }} />
          ) : (
            <BsSunFill style={{ color: 'rgb(80, 255, 255)' }} />
          )}
          <Switch
            size="xs"
            checked={checked}
            onChange={handleThemeChange}
          />
        </div>
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
