import React, { useContext } from 'react';
import { ThemeContext } from 'contexts/themeContext';

function PopOver({ item, hovered }) {
  const { isDark } = useContext(ThemeContext);

  const popOverActive = {
    width: '9rem',
    backgroundColor: isDark ? 'rgb(34, 34, 34)' : 'rgb(212, 212, 212)',
    translate: 'translate(-50%, -50%)',
    color: isDark ? 'white' : 'black',
  };

  const popOverInactive = {
    backgroundColor: isDark ? 'rgb(34, 34, 34)' : 'rgb(212, 212, 212)',
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
