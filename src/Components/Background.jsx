import React from 'react';

const Background = () => {
  const bgStyle = {
    backgroundImage:
      "url('https://advancedwebtechnology.com/Portals/0/Images/BGs4MarcusBot.png?ver=Y7bZZvZ8zbXtB9xvK0X74Q%3d%3d&timestamp=1661472043066')",
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
