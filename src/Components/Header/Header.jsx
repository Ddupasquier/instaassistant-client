import React from 'react';
import PropTypes from 'prop-types';
import './scss/header-styles.css';

function Header({ billingSelected }) {
  // const boxPositions = [
  //   {
  //     top: '0',
  //     left: '0',
  //     width: '100%',
  //     height: '100%',
  //   },
  //   {
  //     top: '0',
  //     left: '0',
  //     width: '100%',
  //     height: '100%',
  //   },
  //   {
  //     top: '0',
  //     left: '0',
  //     width: '100%',
  //     height: '100%',
  //   },
  //   {
  //     top: '0',
  //     left: '0',
  //     width: '100%',
  //     height: '100%',
  //   },
  // ];

  // useEffect(() => {
  //   moveBoxOne();
  //   moveBoxTwo();
  //   moveBoxThree();
  //   moveBoxFour();
  // }, [billingSelected]);

  // const moveBoxOne = () => {};

  // const moveBoxTwo = () => {};

  // const moveBoxThree = () => {};

  // const moveBoxFour = () => {};

  const boxOne = {
    position: 'absolute',
    top: billingSelected ? '30vh' : '.6rem',
    left: billingSelected ? '30vw' : '.6rem',
    backgroundColor: '#00fbff',
    borderRadius: billingSelected ? '.8rem' : '.1rem',
    width: billingSelected ? '10rem' : '1rem',
    height: billingSelected ? '15rem' : '1.5rem',
    transition: '.5s',
  };

  const boxTwo = {
    position: 'absolute',
    top: billingSelected ? '35vh' : '.8rem',
    left: billingSelected ? '35vw' : '.9rem',
    backgroundColor: '#50ffffc2',
    borderRadius: billingSelected ? '.8rem' : '.1rem',
    width: billingSelected ? '10rem' : '1rem',
    height: billingSelected ? '15rem' : '1.5rem',
    transition: '.5s',
  };

  const boxThree = {
    position: 'absolute',
    top: billingSelected ? '50vh' : '1rem',
    left: billingSelected ? '55vw' : '1.2rem',
    backgroundColor: '#50ffff79',
    borderRadius: billingSelected ? '.8rem' : '.1rem',
    width: billingSelected ? '10rem' : '1rem',
    height: billingSelected ? '15rem' : '1.5rem',
    transition: '.5s',
  };

  const boxFour = {
    position: 'absolute',
    top: billingSelected ? '55vh' : '1.2rem',
    left: billingSelected ? '65vw' : '1.5rem',
    backgroundColor: '#50ffff2d',
    borderRadius: billingSelected ? '.8rem' : '.1rem',
    width: billingSelected ? '10rem' : '1rem',
    height: billingSelected ? '15rem' : '1.5rem',
    transition: '.5s',
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
