import React from 'react';
import { User, Button } from '@nextui-org/react';
import './scss/instaconfig-styles.css';
import { Link } from 'react-router-dom';
import { Slider } from '../../Components/Slider';

function InstagramConfig() {
  return (
    <div className="insta-config">
      <div className="config-user">
        <h2>Configuration</h2>
        <User
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          name="@Username"
          size="xl"
        />
      </div>

      <div className="config-toggles">
        <section>
          <legend>Allow likes:</legend>
          <Slider name="likes" />
        </section>
        <section>
          <legend>Allow follows:</legend>
          <Slider name="follows" />
        </section>
        <section>
          <legend>Allow comments:</legend>
          <Slider name="comments" />
        </section>
        <section>
          <legend>Allow messages:</legend>
          <Slider name="messages" />
        </section>
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
      </div>
      <div className="config-buttons">
        <Button type="button" color="secondary" size="md" rounded>
          Save
        </Button>
        <Button type="button" color="secondary" size="md" rounded>
          <Link to="/account" className="button">
            Save and Exit
          </Link>
        </Button>
        <Button type="button" color="secondary" size="md" rounded>
          <Link to="/account" className="button">
            Cancel
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default InstagramConfig;
