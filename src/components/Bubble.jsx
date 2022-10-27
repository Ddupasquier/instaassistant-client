import React from 'react';

const bubbleStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const number = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 1rem',
  borderRadius: '5rem',
  background: 'rgba(255, 255, 255, 0.5)',
  fontWeight: 'bold',
};

function Bubble({ htmlFor, num = 'N/A', name }) {
  return (
    <div style={bubbleStyle}>
      <legend htmlFor={htmlFor}>{name}</legend>
      <div id={htmlFor} style={number}>
        {num}
      </div>
    </div>
  );
}

export default Bubble;
