import React from 'react';

function PopOver({ item, hovered }) {
  const popOverActive = {
    width: '7.5rem',
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
