import React, { useContext } from 'react';
import { ThemeContext } from 'contexts/appContext';
import './scss/menu-styles.css';

import {
  FaUserAlt,
  FaUserFriends,
  FaQuestionCircle,
  FaMoneyBill,
} from 'react-icons/fa';
import { BsSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import MenuItem from './MenuItem';
import PopOver from './PopOver';
import { styled, Switch } from '@nextui-org/react';

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

function Menu({ menuItemHovered, setMenuItemHovered }) {
  const { isDark, toggleFunction } = useContext(ThemeContext);

  const Nav = styled('nav', {
    backgroundColor: '$menu',
  });

  return (
    <>
      <Nav className="menu" role="menu">
        {menuItems.map((item, i) => (
          <div
            onMouseOver={() => setMenuItemHovered(item.name)}
            onFocus={() => setMenuItemHovered(item.name)}
            onMouseLeave={() => setMenuItemHovered('')}
            onBlur={() => setMenuItemHovered('')}
            key={item.name}
            role="presentation"
            tabIndex={i}
          >
            <MenuItem item={item} />
          </div>
        ))}
        <div className="menu-bottom">
          {isDark ? <BsSunFill /> : <BsFillMoonStarsFill />}
          <Switch
            aria-label="Toggle dark mode"
            color="secondary"
            size="xs"
            checked={isDark}
            aria-checked={isDark}
            onChange={toggleFunction}
            role="switch"
          />
        </div>
      </Nav>
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
