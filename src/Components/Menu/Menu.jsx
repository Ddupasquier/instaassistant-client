import React, { useState } from 'react';
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
  theme,
}) {
  const [checked, setChecked] = useState(false);

  const handleThemeChange = () => {
    setChecked(!checked);
    setTheme(checked ? lightTheme : darkTheme);
  };

  return (
    <>
      <nav
        className="menu"
        style={{
          backgroundColor:
            theme === darkTheme ? 'rgb(34, 34, 34)' : 'rgb(212, 212, 212)',
        }}
      >
        {menuItems.map((item, i) => (
          <div
            onMouseOver={() => setMenuItemHovered(item.name)}
            onFocus={() => setMenuItemHovered(item.name)}
            onMouseLeave={() => setMenuItemHovered('')}
            onBlur={() => setMenuItemHovered('')}
            key={item.name}
            role="menuitem"
            tabIndex={i}
          >
            <MenuItem
              item={item}
              animateLogo={animateLogo}
              theme={theme}
              darkTheme={darkTheme}
            />
          </div>
        ))}
        <div className="menu-bottom">
          {!checked ? (
            <BsFillMoonStarsFill style={{ color: 'rgb(80, 255, 255)' }} />
          ) : (
            <BsSunFill style={{ color: 'rgb(80, 255, 255)' }} />
          )}
          <Switch
            color="secondary"
            size="xs"
            checked={checked}
            onChange={handleThemeChange}
          />
        </div>
      </nav>
      {window.innerWidth > 760 ? (
        <div className="pop-overs">
          {menuItems.map((item) => (
            <PopOver
              key={item.to}
              item={item}
              hovered={menuItemHovered}
              theme={theme}
              darkTheme={darkTheme}
            />
          ))}
        </div>
      ) : null}
    </>
  );
}

export default Menu;
