import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <NavLink
      to={item.to}
      exact="true"
      activeClassName="active"
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
    >
      <div className="menu-item ">
        <item.Icon />
      </div>
    </NavLink>
  );
};

export default MenuItem;
