import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './scss/slider-styles.css';

function Slider({ name }) {
  const [slider, setSlider] = useState(false);

  const toggleRight = {
    float: 'right',
  };
  const toggleLeft = {
    float: 'left',
  };

  return (
    <button
      id={name}
      type="button"
      className="slider"
      onClick={() => {
        setSlider(!slider);
      }}
      style={
        slider
          ? { backgroundColor: '#00FFFFFF' }
          : { backgroundColor: '#C0C2C9' }
      }
    >
      <div
        className="slider-toggle"
        style={slider ? toggleRight : toggleLeft}
      />
    </button>
  );
}

export default Slider;

Slider.propTypes = {
  name: PropTypes.string.isRequired,
};
