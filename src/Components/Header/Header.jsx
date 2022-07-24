import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './scss/header-styles.css';

function Header({ billingSelected }) {
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
        left: ['65vw', '1.5rem'],
        borderRadius: ['.8rem', '.1rem'],
        width: ['10rem', '1rem'],
        height: ['15rem', '1.5rem'],
      },
    ];

    const moveBoxOne = () => {
      if (billingSelected) {
        let res = [];
        for (const rule in boxPositions[0]) {
          res.push(`${rule}: '${boxPositions[0][rule][0]}',`);
        }
        return res;
      } else {
        let res = [];
        for (const rule in boxPositions[0]) {
          res.push(`${rule}: '${boxPositions[0][rule][1]}',`);
        }
        return res;
      }
    };
    moveBoxOne();
  }, [billingSelected]);

  // const moveBoxTwo = () => {
  //   if (billingSelected) {
  //     boxPositions[1].forEach((val) => {
  //       return val[0];
  //     });
  //   } else {
  //     boxPositions[1].forEach((val) => {
  //       return val[1];
  //     });
  //   }
  // };

  // const moveBoxThree = () => {
  //   if (billingSelected) {
  //     boxPositions[2].map((val) => {
  //       return val[0];
  //     });
  //   } else {
  //     boxPositions[2].map((val) => {
  //       return val[1];
  //     });
  //   }
  // };

  // const moveBoxFour = () => {
  //   if (billingSelected) {
  //     boxPositions[3].map((val) => {
  //       return val[0];
  //     });
  //   } else {
  //     boxPositions[3].map((val) => {
  //       return val[1];
  //     });
  //   }
  // };

  const boxOne = {
    top: billingSelected ? '30vh' : '.6rem',
    left: billingSelected ? '30vw' : '.6rem',
    borderRadius: billingSelected ? '.8rem' : '.1rem',
    width: billingSelected ? '10rem' : '1rem',
    height: billingSelected ? '15rem' : '1.5rem',
  };

  const boxTwo = {
    top: billingSelected ? '35vh' : '.8rem',
    left: billingSelected ? '35vw' : '.9rem',
    borderRadius: billingSelected ? '.8rem' : '.1rem',
    width: billingSelected ? '10rem' : '1rem',
    height: billingSelected ? '15rem' : '1.5rem',
  };

  const boxThree = {
    top: billingSelected ? '50vh' : '1rem',
    left: billingSelected ? '55vw' : '1.2rem',
    borderRadius: billingSelected ? '.8rem' : '.1rem',
    width: billingSelected ? '10rem' : '1rem',
    height: billingSelected ? '15rem' : '1.5rem',
  };

  const boxFour = {
    top: billingSelected ? '55vh' : '1.2rem',
    left: billingSelected ? '60vw' : '1.5rem',
    borderRadius: billingSelected ? '.8rem' : '.1rem',
    width: billingSelected ? '10rem' : '1rem',
    height: billingSelected ? '15rem' : '1.5rem',
  };

  return (
    <header style={{ zIndex: billingSelected ? '1' : '1000' }}>
      <div className="logo">
        <div className="box-one" style={boxOne} />
        <div className="box-two" style={boxTwo} />
        <div className="box-three" style={boxThree} />
        <div className="box-four" style={boxFour} />
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
