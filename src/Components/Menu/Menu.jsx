import React from 'react';
import { BsGearWideConnected } from 'react-icons/bs';
import { FaUserAlt, FaUserFriends } from 'react-icons/fa';
import { VscGraphLine } from 'react-icons/vsc';
import { MenuItem } from '../MenuItem';
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
  const popOverStyle = {
    width: '8rem',
    translate: 'translate(-50%, -50%)',
  };

  // const isHover = (hover) => {
  //   console.log(hover);
  //   return hover;
  // };

  return (
    <>
      <div className="menu">
        {menuItems.map((item) => (
          <MenuItem key={item.to} item={item} 
          // isHover={isHover} 
          />
        ))}
      </div>
      <div className="pop-overs">
        {menuItems.map((item) => (
          <div
            key={item.to}
            className="pop-over"
            style={popOverStyle}
          >
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
