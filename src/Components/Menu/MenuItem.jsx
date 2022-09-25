import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function MenuItem({ item, animateLogo, theme, darkTheme }) {
  const [hover, setHover] = useState(false);

  return (
    <NavLink
      to={item.to}
      exact="true"
      activeclassname="active"
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
      onClick={() => animateLogo(item.name)}
    >
      <div
        className="menu-item"
        aria-labelledby={item.name}
        style={{ color: theme === darkTheme ? 'rgb(80, 255, 255)' : 'black' }}
      >
        <item.Icon />
      </div>
    </NavLink>
  );
}

export default MenuItem;
