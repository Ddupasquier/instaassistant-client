import React from 'react';

const Background = () => {
  const bgStyle = {
    backgroundImage:
      "url('https://advancedwebtechnology.com/Portals/0/Images/ezgif-1-6ab989b982.jpeg?ver=FxjLZgyYJvyNBHO8IGcWmQ%3d%3d&timestamp=1661282809029')",
    backgroundPosition: 'center right',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    bottom: '0',
    filter: '',
    height: '100vh',
    width: '100vw',
  };

  return <div style={bgStyle} />;
};

export default Background;
