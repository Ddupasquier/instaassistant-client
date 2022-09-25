import React, { useState, useEffect } from 'react';

const box1init = {
  top: '.6rem',
  left: '.6rem',
  borderRadius: '.1rem',
  width: '1rem',
  height: '1.5rem',
};

const box2init = {
  top: '.8rem',
  left: '.9rem',
  borderRadius: '.1rem',
  width: '1rem',
  height: '1.5rem',
};

const box3init = {
  top: '1rem',
  left: '1.2rem',
  borderRadius: '.1rem',
  width: '1rem',
  height: '1.5rem',
};

const box4init = {
  top: '1.2rem',
  left: '1.5rem',
  borderRadius: '.1rem',
  width: '1rem',
  height: '1.5rem',
};

function LogoAnimation({ menuSelected }) {
  const [boxOneStyle, setBoxOneStyle] = useState(box1init);
  const [boxTwoStyle, setBoxTwoStyle] = useState(box2init);
  const [boxThreeStyle, setBoxThreeStyle] = useState(box3init);
  const [boxFourStyle, setBoxFourStyle] = useState(box4init);

  useEffect(() => {
    if (window.innerWidth > 760) {
      const boxPositions = [
        // box one
        //* [in header, billing, profile, accounts]
        {
          top: ['.6rem', '15vh', '13vh', '13vh'],
          left: ['.6rem', '15vw', '50vw', '10vw'],
          borderRadius: ['.1rem', '.8rem', '.8rem', '.8rem'],
          width: ['1rem', '13rem', '30rem', '13rem'],
          height: ['1.5rem', '20rem', '11rem', '20rem'],
        },
        // box two
        {
          top: ['.8rem', '25vh', '20vh', '20vh'],
          left: ['.9rem', '25vw', '30vw', '24vw'],
          borderRadius: ['.1rem', '.8rem', '.8rem', '.8rem'],
          width: ['1rem', '13rem', '35rem', '13rem'],
          height: ['1.5rem', '20rem', '11rem', '70vh'],
        },
        // box three
        {
          top: ['1rem', '50vh', '32vh', '13vh'],
          left: ['1.2rem', '60vw', '58vw', '34vw'],
          borderRadius: ['.1rem', '.8rem', '.8rem', '.8rem'],
          width: ['1rem', '13rem', '22rem', '13rem'],
          height: ['1.5rem', '20rem', '11rem', '20rem'],
        },
        // box four
        {
          top: ['1.2rem', '60vh', '43vh', '20vh'],
          left: ['1.5rem', '70vw', '73vw', '48vw'],
          borderRadius: ['.1rem', '.8rem', '.8rem', '.8rem'],
          width: ['1rem', '13rem', '25rem', '13rem'],
          height: ['1.5rem', '20rem', '11rem', '70vh'],
        },
      ];

      const moveBoxes = (num) => {
        if (menuSelected === 'Billing') {
          const res = {};
          for (const rule in boxPositions[num]) {
            res[rule] = boxPositions[num][rule][1];
          }
          return res;
        } else if (menuSelected === 'Profile') {
          const res = {};
          for (const rule in boxPositions[num]) {
            res[rule] = boxPositions[num][rule][2];
          }
          return res;
        } else if (menuSelected === 'Accounts') {
          const res = {};
          for (const rule in boxPositions[num]) {
            res[rule] = boxPositions[num][rule][3];
          }
          return res;
        } else {
          const res = {};
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
    <div className="logo">
      <div className="box-one" style={boxOneStyle} />
      <div className="box-two" style={boxTwoStyle} />
      <div className="box-three" style={boxThreeStyle} />
      <div className="box-four" style={boxFourStyle} />
    </div>
  );
}

export default LogoAnimation;
