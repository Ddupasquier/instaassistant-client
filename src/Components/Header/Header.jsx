import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './scss/header-styles.css';
// import Icon from './Icon';
function Header({ billingSelected }) {
  const [boxOneStyle, setBoxOneStyle] = useState({
    top: '.6rem',
    left: '.6rem',
    borderRadius: '.1rem',
    width: '1rem',
    height: '1.5rem',
  });
  const [boxTwoStyle, setBoxTwoStyle] = useState({
    top: '.8rem',
    left: '.9rem',
    borderRadius: '.1rem',
    width: '1rem',
    height: '1.5rem',
  });
  const [boxThreeStyle, setBoxThreeStyle] = useState({
    top: '1.2rem',
    left: '1.5rem',
    borderRadius: '.1rem',
    width: '1rem',
    height: '1.5rem',
  });
  const [boxFourStyle, setBoxFourStyle] = useState({
    top: '1rem',
    left: '1.2rem',
    borderRadius: '.1rem',
    width: '1rem',
    height: '1.5rem',
  });

  useEffect(() => {
    const boxPositions = [
      {
        top: ['30vh', '.6rem'],
        left: ['30vw', '.6rem'],
        borderRadius: ['.8rem', '.1rem'],
        width: ['10rem', '1rem'],
        height: ['15rem', '1.5rem'],
      },
      {
        top: ['35vh', '.8rem'],
        left: ['35vw', '.9rem'],
        borderRadius: ['.8rem', '.1rem'],
        width: ['10rem', '1rem'],
        height: ['15rem', '1.5rem'],
      },
      {
        top: ['50vh', '1rem'],
        left: ['55vw', '1.2rem'],
        borderRadius: ['.8rem', '.1rem'],
        width: ['10rem', '1rem'],
        height: ['15rem', '1.5rem'],
      },
      {
        top: ['55vh', '1.2rem'],
        left: ['60vw', '1.5rem'],
        borderRadius: ['.8rem', '.1rem'],
        width: ['10rem', '1rem'],
        height: ['15rem', '1.5rem'],
      },
    ];

    const moveBoxes = (num) => {
      if (billingSelected) {
        let res = {};
        for (const rule in boxPositions[num]) {
          res[rule] = boxPositions[num][rule][0];
        }
        return res;
      } else {
        let res = {};
        for (const rule in boxPositions[num]) {
          res[rule] = boxPositions[num][rule][1];
        }
        return res;
      }
    };

    setBoxOneStyle(moveBoxes(0));
    setBoxTwoStyle(moveBoxes(1));
    setBoxThreeStyle(moveBoxes(2));
    setBoxFourStyle(moveBoxes(3));
  }, [billingSelected]);

  return (
    <header style={{ zIndex: billingSelected ? '1' : '1000' }}>
      <div className="logo">
        <div className="box-one" style={boxOneStyle} />
        <div className="box-two" style={boxTwoStyle} />
        <div className="box-three" style={boxThreeStyle} />
        <div className="box-four" style={boxFourStyle} />
        {/* <Icon
          billing={billingSelected}
          top=".6rem"
          newTop="30vh"
          left=".6rem"
          newLeft="30vw"
          height="1.5rem"
          newHeight="15rem"
          width="1rem"
          newWidth="10rem"
          border=".1rem"
        /> */}
      </div>
      <div className="site-name">
        <i>Instant</i>
        <b>Assistant</b>
      </div>
      <div className="username">Username here</div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  billingSelected: PropTypes.bool.isRequired,
};
