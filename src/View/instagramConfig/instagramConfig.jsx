import React from 'react';
import './scss/instaconfig-styles.css';
import Slider from '../../Components/Slider';
import Button from '../../Components/Button';

const InstagramConfig = () => {
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
          <label>Look-Alike Text Box</label>
          <br />
          <textarea type="textarea" className=" inset"></textarea>
        </div>

        <div className="textarea-container">
          <label>Black-List Text Box</label>
          <br />
          <textarea type="textarea" className=" inset"></textarea>
        </div>

        <div className="textarea-container">
          <label>White-List Text Box</label>
          <br />
          <textarea type="textarea" className=" inset"></textarea>
        </div>

        <div className="textarea-container">
          <label>Comments Text Box</label>
          <br />
          <textarea type="textarea" className=" inset"></textarea>
        </div>

        <div className="textarea-container">
          <label>Direct Messages Text Box</label>
          <br />
          <textarea type="textarea" className=" inset"></textarea>
        </div>
        
        <div className="textarea-container">
          <label>Comments Text Box</label>
          <br />
          <textarea type="textarea" className=" inset"></textarea>
        </div>

        <br />
      </div>
      <div className="config-buttons">
        <Button text="SAVE" />

        <Button text="Save&nbsp;&amp;&nbsp;Exit" />

        <Button text="Discard&nbsp;Changes" />
      </div>
    </div>
  );
};

export default InstagramConfig;
