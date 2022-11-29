import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'contexts/appContext';
import { styled, Switch } from '@nextui-org/react';
import { Logout } from 'api';
import './sidebar-styles.scss';

import { BsSunFill, BsFillMoonStarsFill, BsPenFill } from 'react-icons/bs';
import {
  FaUserAlt,
  FaUserFriends,
  FaQuestionCircle,
  FaMoneyBill,
} from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { FiTrendingUp } from 'react-icons/fi';
import { IoApps, IoLogOutSharp } from 'react-icons/io5';
import { RiCompassDiscoverFill } from 'react-icons/ri';

import { Ctrl, Tri, Tsk, Psc } from 'assets';

const upperMenuItems = [
  {
    name: 'Home',
    to: '/',
    icon: <AiFillHome />,
  },
  {
    name: 'Apps',
    icon: <IoApps />,
    items: [
      { name: 'Ctrl', src: Ctrl },
      { name: 'Tsk', src: Tsk },
      { name: 'Tri', src: Tri },
      { name: 'Psc', src: Psc },
    ],
  },
  {
    name: 'Accounts',
    to: '/accounts',
    icon: <FaUserFriends />,
    // items: ['account1', 'account2', 'account3'],
  },
  {
    name: 'Discover',
    to: '',
    icon: <RiCompassDiscoverFill />,
    // items: ['News', 'Blog', 'Resources', 'FAQ'],
  },
  {
    name: 'Blog (coming soon)',
    to: '',
    icon: <BsPenFill />,
  },
  {
    name: 'Trending (coming soon)',
    to: '',
    icon: <FiTrendingUp />,
  },
];

const lowerMenuItems = [
  {
    name: 'Account Info',
    to: '/profile',
    icon: <FaUserAlt />,
  },
  {
    name: 'Billing',
    to: '/billing',
    icon: <FaMoneyBill />,
  },
  {
    name: 'Support',
    to: '/FAQ',
    icon: <FaQuestionCircle />,
  },
];

export const Sidebar = () => {
  const { isDark, toggleFunction } = useContext(ThemeContext);

  const SideBar = styled('div', {
    backgroundColor: '$menu',
    width: '20rem',
    zIndex: '100',
    position: 'relative',
    padding: '0',
    margin: '0',
    color: '$text',
  });

  const Logo = styled('img', {
    filter: !isDark && 'brightness(0%)',
  });

  const Detail = styled('details', {
    backgroundColor: 'transparent',
  });

  const Li = styled('li', {
    margin: '0',
    padding: '0.5rem 0',
    listStyle: 'none',
    width: '100%',
    color: '$text',
    fontSize: '1rem',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all .5s',
    '&:hover': {
      backgroundColor: '$hover',
    },
  });

  const LowerMenu = styled('div', {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    padding: '1rem 0',
    background: '$myColor',
  });

  const Icon = styled('div', {
    position: 'relative',
    top: '2px',
    float: 'left',
    width: '2rem',
  });

  return (
    <SideBar className="sidebar">
      <Logo
        src="https://advanced-web-technology-c3582e48.s3.us-west-1.amazonaws.com/AntiSocialSuite/img/antiSOCIALsuite.svg"
        alt="ass-logo"
      />
      <ul>
        {localStorage.getItem('email') &&
          upperMenuItems.map((item, i) =>
            item.items ? (
              <Li key={item.name} className="menu-item">
                <Icon>{item.icon}</Icon>
                <Detail open={item.name === 'Apps' && true}>
                  <summary>{item.name}</summary>
                  <ul className={item.name === 'Apps' ? 'apps-details' : null}>
                    {item.items.map((subItem, i) => (
                      <Li key={i}>
                        {subItem.src ? (
                          <img
                            src={subItem.src}
                            alt={subItem.name}
                            title={subItem.name}
                            aria-label={subItem.name}
                            className="app-icon"
                          />
                        ) : (
                          subItem
                        )}
                      </Li>
                    ))}
                  </ul>
                </Detail>
              </Li>
            ) : (
              <Link to={item.to} key={item.name}>
                <Li className="menu-item">
                  <Icon>{item.icon}</Icon>
                  {item.name}
                </Li>
              </Link>
            )
          )}
      </ul>
      <LowerMenu className="lower-menu">
        <ul>
          {lowerMenuItems.map((item) => (
            <Link to={item.to} key={item.name}>
              <Li key={item.name} className="menu-item">
                <Icon>{item.icon}</Icon>
                {item.name}
              </Li>
            </Link>
          ))}
          <Li
            key={'logout'}
            className="menu-item"
            onClick={() => {
              Logout();
              window.location.href = '/';
            }}
          >
            <Icon>
              <IoLogOutSharp />
            </Icon>
            Logout
          </Li>
        </ul>

        <div className="switch">
          {isDark ? <BsSunFill size={25} /> : <BsFillMoonStarsFill size={25} />}
          <Switch
            aria-label="Toggle dark mode"
            color="secondary"
            size="sm"
            checked={!isDark}
            aria-checked={isDark}
            onChange={toggleFunction}
            role="switch"
          />
        </div>
      </LowerMenu>
    </SideBar>
  );
};
