import React, { useState, useEffect } from 'react';
import './scss/header-styles.css';

function Icon({
  billing,
  top,
  newTop,
  left,
  newLeft,
  border,
  width,
  newWidth,
  height,
  newHeight,
}) {
  const [boxStyle, setBoxStyle] = useState({
    position: 'absolute',
    transition: '.5s',
    top: { top },
    left: { left },
    borderRadius: { border },
    width: { width },
    height: { height },
    zIndex: '1',
    backgroundColor: 'green',
  });

  useEffect(() => {
    const boxPosition = {
      position: 'absolute',
      transition: '.5s',
      top: [{ newTop }, { top }],
      left: [{ newLeft }, { left }],
      borderRadius: ['.8rem', { border }],
      width: [{ newWidth }, { width }],
      height: [{ newHeight }, { height }],
      zIndex: '1',
      backgroundColor: 'green',
    };
    const moveBox = () => {
      if (billing) {
        let res = {};
        for (const rule in boxPosition) {
          res[rule] = boxPosition[rule][0];
        }
        return res;
      } else {
        let res = {};
        for (const rule in boxPosition) {
          res[rule] = boxPosition[rule][1];
        }
        return res;
      }
    };

    setBoxStyle(moveBox());
  }, [
    billing,
    border,
    height,
    left,
    newHeight,
    newLeft,
    newTop,
    newWidth,
    top,
    width,
  ]);

  return <div style={boxStyle} />;
}

export default Icon;
