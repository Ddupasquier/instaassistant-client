import React from 'react';
import PropTypes from 'prop-types';
import './scss/button-styles.css';

function Button({ text }) {
  return <div className="outset button">{text}</div>;
}

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
