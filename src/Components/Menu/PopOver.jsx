import React from 'react';
import useDarkMode from 'use-dark-mode';

function PopOver({ item, hovered }) {
  const darkMode = useDarkMode(false);
  const popOverActive = {
    width: '9rem',
    backgroundColor: darkMode.value ? 'rgb(34, 34, 34)' : 'rgb(212, 212, 212)',
    translate: 'translate(-50%, -50%)',
    color: darkMode.value ? 'rgb(80, 255, 255)' : 'black',
  };

  const popOverInactive = {
    backgroundColor: darkMode.value ? 'rgb(34, 34, 34)' : 'rgb(212, 212, 212)',
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
