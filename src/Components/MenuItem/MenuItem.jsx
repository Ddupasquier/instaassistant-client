import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ item }) => {
  return (
    <NavLink to={item.to} exact={true} activeClassName="active">
      <div className="menu-item ">
        <item.Icon />
        {/* <span>{item.name}</span> */}
      </div>
    </NavLink>
  );
};

export default MenuItem;
