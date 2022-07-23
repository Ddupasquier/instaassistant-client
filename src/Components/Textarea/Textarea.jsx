import React from 'react';
import './scss/textarea-styles.css';
import PropTypes from 'prop-types';

function Textarea({ legend }) {
  return (
    <div className="textarea-container">
      <legend>{legend}</legend>
      <textarea type="textarea" />
    </div>
  );
}

export default Textarea;

Textarea.propTypes = {
  legend: PropTypes.string.isRequired,
};
