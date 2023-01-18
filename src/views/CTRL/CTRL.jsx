import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from 'contexts/userContext';
import { useParams } from 'react-router-dom';

import { Card, Button, Input, Textarea } from '@nextui-org/react';
import { Select } from 'components/styled';

import DropDown from 'components/DropDown';

import { actions } from './constants';

import { PostTask } from 'api';

import { TooltipPop } from 'components/Tooltip';
import AccountInfoMin from 'components/AccountInfoMin';

const CTRL = () => {
  const { ctrl_id } = useParams();

  const { allAccounts } = useContext(UserContext);

  const [selectParam, setSelectParam] = useState(undefined);
  const [actionSelected, setActionSelected] = useState('');
  const [inputLabel, setInputLabel] = useState('Target URL');

  const [selectedAccount, setSelectedAccount] = useState(null);
  const { id, username, platform } = selectedAccount || {};

  useEffect(() => {
    if (ctrl_id) {
      setSelectParam(ctrl_id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectParam && allAccounts) {
      setSelectedAccount(
        allAccounts.find((acc) => acc.username === selectParam)
      );
    }
  }, [allAccounts, selectParam, selectedAccount]);


  useEffect(() => {
    switch (actionSelected) {
      case 'Follow':
        setInputLabel('@username');
        break;
      case 'Like':
        setInputLabel('Target URL');
        break;
      case 'Comment':
        setInputLabel('Target URL');
        break;
      case 'Message':
        setInputLabel('@username');
        break;
      case 'Unfollow':
        setInputLabel('@username');
        break;
      default:
        setInputLabel('Target URL');
    }
  }, [actionSelected]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const notScheduled = new Date().toUTCString();
    const payload = {
      account_id: id,
      task_type: data.Action,
      list_type: ``,
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
      setActionSelected('');
      alert('Task successfully created!');
    }
  };

  return (
    <div className="view-container">
      <Card css={{ width: '60%', padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <h1>CTRL</h1>
          {selectedAccount && (
            <AccountInfoMin
              username={username}
              platform={platform}
            />
          )}
        </div>
        <br />
          <Select
            onChange={(e) => {
              setSelectParam(e.target.value);
            }}
          >
            <option value={null} style={{ color: 'black' }}>
              Select an account
            </option>
            {allAccounts &&
              allAccounts.map((account) => (
                <option
                  key={account.id}
                  value={account.username}
                  style={{ color: 'black' }}
                >
                  {account.username}
                </option>
              ))}
          </Select>

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

            <>
              <br />
              <Input
                labelPlaceholder={inputLabel}
                name="targetUrl"
                status="secondary"
                type="text"
                bordered
                required
              />
              <br />

              {(actionSelected === 'Comment' ||
                actionSelected === 'Message') && (
                <div style={{ display: 'flex', gap: '.5rem' }}>
                  Optional Arguments
                  <TooltipPop
                    content="Optional arguments will overwrite your config for this task alone."
                    local="right"
                  />
                </div>
              )}

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
