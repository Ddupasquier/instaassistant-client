import React from 'react';

const bubbleStyle = {};

function Bubble({ htmlFor, num, name }) {
  return (
    <div style={bubbleStyle}>
      <legend htmlFor={htmlFor}>{name}</legend>
      <div id={htmlFor}>
        {num ? num[num.length - 1] : 0}
      </div>
    </div>
  );
}

export default Bubble;
