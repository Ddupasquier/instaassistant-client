import React from 'react';
import './scss/instaconfig-styles.css';
import { Link } from 'react-router-dom';
import { Slider } from '../../Components/Slider';
import { Button } from '../../Components/Button';

function InstagramConfig() {
  return (
    <div className="insta-config">
      <div className="head">
        <h1>@USERNAME</h1>
        <p>
          <em>update username for @username</em>
        </p>
        <hr />
      </div>
      <div className="config-toggles">
        <Slider name="likes" />

        <Slider name="follows" />

        <Slider name="comments" />

        <Slider name="messages" />
      </div>
      <div className="config-textareas">
        <div className="textarea-container">
          <legend>Look-Alike Text Box</legend>
          <br />
          <textarea type="textarea" className="inset" />
        </div>

        <div className="textarea-container">
          <legend>Black-List Text Box</legend>
          <br />
          <textarea type="textarea" className="inset" />
        </div>

        <div className="textarea-container">
          <legend>White-List Text Box</legend>
          <br />
          <textarea type="textarea" className="inset" />
        </div>

        <div className="textarea-container">
          <legend>Comments Text Box</legend>
          <br />
          <textarea type="textarea" className="inset" />
        </div>

        <div className="textarea-container">
          <legend>Direct Messages Text Box</legend>
          <br />
          <textarea type="textarea" className="inset" />
        </div>

        <div className="textarea-container">
          <legend>Comments Text Box</legend>
          <br />
          <textarea type="textarea" className="inset" />
        </div>

        <br />
      </div>
      <div className="config-buttons">
        <Button text="SAVE" />

        <Link to="/account" className="button outset">
          Save and Exit
        </Link>

        <Button text="Discard&nbsp;Changes" />
      </div>
    </div>
  );
}

export default InstagramConfig;
