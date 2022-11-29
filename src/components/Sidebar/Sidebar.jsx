import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'contexts/appContext';
import { styled, Switch } from '@nextui-org/react';
import { Logout } from 'api';
import { SideBar, Li, Detail, Icon, LowerMenu } from './styled';
import { upperMenuItems, lowerMenuItems } from './constants';
import './sidebar-styles.scss';

import { BsSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { IoLogOutSharp } from 'react-icons/io5';

export const Sidebar = () => {
  const { isDark, toggleFunction } = useContext(ThemeContext);

  const Logo = styled('img', {
    filter: !isDark && 'brightness(0%)',
  });

  return (
    <SideBar className="sidebar">
      <Logo
        src="https://advanced-web-technology-c3582e48.s3.us-west-1.amazonaws.com/AntiSocialSuite/img/antiSOCIALsuite.svg"
        alt="ass-logo"
      />
      <div style={{ textAlign: 'center' }}>
        As: {localStorage.getItem('email').replace(/['"]+/g, '')}
      </div>
      <ul>
        {localStorage.getItem('email') &&
          upperMenuItems.map((item, i) =>
            item.items ? (
              <Li key={item.name} className="menu-item">
                <Icon>{<item.icon />}</Icon>
                <Detail open={item.name === 'Apps' && true}>
                  <summary>{item.name}</summary>
                  <ul className={item.name === 'Apps' ? 'apps-details' : null}>
                    {item.items.map((subItem, i) => (
                      <Li key={i} className="app-icons">
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
                  <Icon>{<item.icon />}</Icon>
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
                <Icon>{<item.icon />}</Icon>
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
