import React, { useState } from 'react';
import './ctrl-styles.scss';

import { Card, Button, Input, Textarea } from '@nextui-org/react';

import DropDown from 'components/DropDown';

import {
  actions,
  listTargets,
  accountListTypes,
  postListTypes,
} from './constants';

import { PostTask } from 'api';

import { TooltipPop } from 'components/Tooltip';

const CTRL = () => {
  const [actionSelected, setActionSelected] = useState('');
  const [listTargetSelected, setListTargetSelected] = useState('');
  const [listTypeSelected, setListTypeSelected] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const notScheduled = new Date().toUTCString();
    const payload = {
      // account_id,
      task_type: data.Action,
      list_type: `${data.ListTarget}:${data.ListType}`,
      target_url: data.targetUrl,
      custom_messages: data.customMessages,
      custom_comments: data.customComments,
      schedule: false,
      date: notScheduled,
      date_created: notScheduled,
    };
    const res = PostTask(payload);
    if (res.error) {
      alert(
        'Something went wrong. Please try again in a few minutes!',
        res.error
      );
    } else {
      alert('Task successfully created!');
    }
  };

  return (
    <div className="view-container">
      <Card css={{ width: '60%', padding: '2rem' }}>
        <h1>CTRL</h1>
        <form onSubmit={handleSubmit}>
          <Card.Body css={{ gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '.5rem' }}>
              Action
              <TooltipPop
                content="Choose the action you would like your account to take."
                local="right"
              />
            </div>

            <DropDown
              options={actions}
              setter={setActionSelected}
              name={'Action'}
            />

            {actionSelected && (
              <DropDown
                options={listTargets}
                setter={setListTargetSelected}
                name={'ListTarget'}
              />
            )}

            {listTargetSelected && (
              <DropDown
                options={
                  listTargetSelected === 'Account'
                    ? accountListTypes
                    : postListTypes
                }
                setter={setListTypeSelected}
                name={'ListType'}
              />
            )}

            {listTypeSelected && (
              <>
                <Input
                  labelPlaceholder="Target URL"
                  name="targetUrl"
                  status="secondary"
                  type="text"
                  bordered
                  required
                />
                <div style={{ display: 'flex', gap: '.5rem' }}>
                  Optional Arguments
                  <TooltipPop
                    content="Optional arguments will overwrite your config for this task alone."
                    local="right"
                  />
                </div>
                {actionSelected === 'Message' && (
                  <Textarea
                    labelPlaceholder="Custom Message(s)"
                    name="customMessages"
                    type="text"
                    bordered
                    color="secondary"
                  />
                )}
                {actionSelected === 'Comment' && (
                  <Textarea
                    labelPlaceholder="Custom Comment(s)"
                    name="customComments"
                    type="text"
                    bordered
                    color="secondary"
                  />
                )}
              </>
            )}
          </Card.Body>
          <Card.Footer>
            <Button rounded color="secondary" type="submit">
              Run
            </Button>
          </Card.Footer>
        </form>
      </Card>
    </div>
  );
};

export default CTRL;
