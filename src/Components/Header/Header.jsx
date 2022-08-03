import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './scss/header-styles.css';

function Header({ menuSelected }) {
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
    if (window.innerWidth > 760) {
      const boxPositions = [
        {
          top: ['.6rem', '15vh', '10vh', '10vh'],
          left: ['.6rem', '15vw', '50vw', '10vw'],
          borderRadius: ['.1rem', '.8rem', '.8rem', '.8rem'],
          width: ['1rem', '13rem', '30rem', '13rem'],
          height: ['1.5rem', '20rem', '11rem', '20rem'],
        },
        {
          top: ['.8rem', '25vh', '20vh', '20vh'],
          left: ['.9rem', '25vw', '30vw', '24vw'],
          borderRadius: ['.1rem', '.8rem', '.8rem', '.8rem'],
          width: ['1rem', '13rem', '35rem', '13rem'],
          height: ['1.5rem', '20rem', '11rem', '60vh'],
        },
        {
          top: ['1rem', '50vh', '32vh', '10vh'],
          left: ['1.2rem', '60vw', '58vw', '34vw'],
          borderRadius: ['.1rem', '.8rem', '.8rem', '.8rem'],
          width: ['1rem', '13rem', '22rem', '13rem'],
          height: ['1.5rem', '20rem', '11rem', '20rem'],
        },
        {
          top: ['1.2rem', '60vh', '43vh', '20vh'],
          left: ['1.5rem', '70vw', '73vw', '48vw'],
          borderRadius: ['.1rem', '.8rem', '.8rem', '.8rem'],
          width: ['1rem', '13rem', '25rem', '13rem'],
          height: ['1.5rem', '20rem', '11rem', '60vh'],
        },
      ];

      const moveBoxes = (num) => {
        if (menuSelected === 'Billing') {
          let res = {};
          for (const rule in boxPositions[num]) {
            res[rule] = boxPositions[num][rule][1];
          }
          return res;
        } else if (menuSelected === 'Profile') {
          let res = {};
          for (const rule in boxPositions[num]) {
            res[rule] = boxPositions[num][rule][2];
          }
          return res;
        } else if (menuSelected === 'Accounts') {
          let res = {};
          for (const rule in boxPositions[num]) {
            res[rule] = boxPositions[num][rule][3];
          }
          return res;
        } else {
          let res = {};
          for (const rule in boxPositions[num]) {
            res[rule] = boxPositions[num][rule][0];
          }
          return res;
        }
      };

      setBoxOneStyle(moveBoxes(0));
      setTimeout(() => {
        setBoxTwoStyle(moveBoxes(1));
      }, '150');
      setTimeout(() => {
        setBoxThreeStyle(moveBoxes(2));
      }, '300');
      setTimeout(() => {
        setBoxFourStyle(moveBoxes(3));
      }, '450');
    }
  }, [menuSelected]);

  return (
    <header>
      <div className="logo">
        <div className="box-one" style={boxOneStyle} />
        <div className="box-two" style={boxTwoStyle} />
        <div className="box-three" style={boxThreeStyle} />
        <div className="box-four" style={boxFourStyle} />
      </div>
      <div className="site-name">
        <i>Marcus</i>
        <b>Bot</b>
      </div>
      <div className="username">Username here</div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  menuSelected: PropTypes.string.isRequired,
};
