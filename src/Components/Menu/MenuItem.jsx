import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function MenuItem({ item, animateLogo }) {
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
      <div className="menu-item ">
        <item.Icon />
      </div>
    </NavLink>
  );
}

export default MenuItem;

MenuItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    Icon: PropTypes.func.isRequired,
  }).isRequired,
  animateLogo: PropTypes.func.isRequired,
};
