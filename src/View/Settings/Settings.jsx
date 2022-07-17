import React from 'react';
import Slider from '../../Components/Slider';
import './scss/settings-styles.css';

const Settings = () => {
  return <div className="settings"><Slider name="follows" /><Slider name="likes" /><Slider name="dms" /><Slider name="comments" /></div>;
};

export default Settings;
