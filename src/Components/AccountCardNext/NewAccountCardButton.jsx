import React from 'react';
import { GoPlus } from 'react-icons/go';

function NewAccountCardButton({ handler }) {
  return (
    <button
      onClick={handler}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#16181A',
        borderRadius: '50%',
        border: 'none',
        height: '2rem',
        aspectRatio: '1',
        cursor: 'pointer',
      }}
    >
      <GoPlus />
    </button>
  );
}

export default NewAccountCardButton;
