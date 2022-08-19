import React from 'react';

const Background = ({ style }) => {
  const bgStyle = {
    backgroundImage: "url('https://i.ibb.co/KFXV3g0/abstract-lines-1.png')",
    backgroundPosition: 'center right',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    bottom: '0',
    filter: 'saturate(200%) blur(3px)',
    height: '100vh',
    width: '100vw',
  };

  const layerStyle = {
  }

  return <div style={bgStyle} />;
};

export default Background;
