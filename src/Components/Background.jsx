import React from 'react';

const Background = ({ theme, darkTheme }) => {
  const bgStyle = {
    backgroundImage:
      "url('https://advancedwebtechnology.com/Portals/0/Images/GausInsta.png?ver=RCPqVbsbg8bkwZiB7z_lgw%3d%3d&timestamp=1661824105768')",
    backgroundPosition: 'center right',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    bottom: '0',
    height: '100vh',
    width: '100vw',
    transition: '1s',
    // filter:
    //   theme === darkTheme ? 'blur(1px) invert(0)' : 'blur(1px) invert(100%)',
  };

  return <div style={bgStyle} />;
};

export default Background;
