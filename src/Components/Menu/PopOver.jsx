import React from 'react';
import PropTypes from 'prop-types';

function PopOver({ item, hovered, theme, darkTheme }) {
  const popOverActive = {
    width: '9rem',
    backgroundColor:
      theme === darkTheme ? 'rgb(34, 34, 34)' : 'rgb(212, 212, 212)',
    translate: 'translate(-50%, -50%)',
    color: theme === darkTheme ? 'rgb(80, 255, 255)' : 'black'
  };

  const popOverInactive = {
    backgroundColor:
      theme === darkTheme ? 'rgb(34, 34, 34)' : 'rgb(212, 212, 212)',
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
