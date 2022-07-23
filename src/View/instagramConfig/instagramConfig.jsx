import React from 'react';
import { Button } from '@nextui-org/react';
import './scss/instaconfig-styles.css';
import { Link } from 'react-router-dom';
import { Slider } from '../../Components/Slider';
import { Textarea } from '../../Components/Textarea';
import { UserIcon } from '../../Components/UserIcon';

function InstagramConfig() {
  const textareas = [
    {
      legend: 'Look Alike',
    },
    {
      legend: 'White List',
    },
    {
      legend: 'Black List',
    },
    {
      legend: 'Comments',
    },
    {
      legend: 'Direct Messages',
    },
  ];

  return (
    <div className="insta-config">
      <div className="config-user">
        <h2>Configuration</h2>
        <UserIcon
          size="xl"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          name="@Username"
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
        {textareas.map((textarea) => (
          <Textarea key={textarea.legend} legend={textarea.legend} />
        ))}
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
