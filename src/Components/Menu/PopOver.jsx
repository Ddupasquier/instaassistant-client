import React from 'react';
import PropTypes from 'prop-types';

function PopOver({ item, hovered }) {
  const popOverActive = {
    width: '8.3rem',
    translate: 'translate(-50%, -50%)',
  };

  const popOverInactive = {
    width: '0',
  };

  return (
    <div
      key={item.to}
      className="pop-over"
      style={hovered === item.name ? popOverActive : popOverInactive}
    >
      {item.name}
    </div>
  );
}

export default PopOver;

PopOver.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    Icon: PropTypes.func.isRequired,
  }).isRequired,
  hovered: PropTypes.string.isRequired,
};
