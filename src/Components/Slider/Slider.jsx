import React, { useState } from 'react';
import './scss/slider-styles.css';

function Slider() {
  const [slider, setSlider] = useState(false);

  const toggleRight = {
    float: 'right',
  };
  const toggleLeft = {
    float: 'left',
  };

  return (
    <button
      className="slider"
      onClick={() => {
        setSlider(!slider);
        console.log(slider);
      }}
      style={
        slider ? { backgroundColor: '#00FFFFFF' } : { backgroundColor: '#C0C2C9' }
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
