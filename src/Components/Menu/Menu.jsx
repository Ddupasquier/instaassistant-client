import React from 'react';
import { BsGearWideConnected } from 'react-icons/bs';
import { FaUserAlt, FaUserFriends } from 'react-icons/fa';
import { VscGraphLine } from 'react-icons/vsc';
import {MenuItem} from '../MenuItem';
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
  return (
    <div className="menu">
      {menuItems.map((item) => (
        <MenuItem key={item.to} item={item} />
      ))}
    </div>
  );
}

export default Menu;