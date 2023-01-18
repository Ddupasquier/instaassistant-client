import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from 'contexts/userContext';
import { useParams } from 'react-router-dom';

import { Card, Button, Input, Textarea, styled } from '@nextui-org/react';
import { Select } from 'components/styled';
import { IoChevronForward } from 'react-icons/io5';

import DropDown from 'components/DropDown';

import {
  actions,
  listTargets,
  accountListTypes,
  postListTypes,
} from './constants';

import { PostTask } from 'api';
import { today, thisTime } from 'utils';
import { TooltipPop } from 'components/Tooltip';
import AccountInfoMin from 'components/AccountInfoMin';

const TimeStyle = styled('input', {
  width: '100%',
  height: '100%',
  border: 'none',
  outline: 'none',
  fontSize: '1.2rem',
  color: 'black',
  backgroundColor: 'white',
  padding: '0.5rem',
});

const DateStyle = styled('input', {
  width: '100%',
  height: '100%',
  border: 'none',
  outline: 'none',
  fontSize: '1.2rem',
  color: 'black',
  backgroundColor: 'white',
  padding: '0.5rem',
});

const TSK = () => {
  const { tsk_id } = useParams();

  const { allAccounts } = useContext(UserContext);

  const [selectParam, setSelectParam] = useState(undefined);
  const [actionSelected, setActionSelected] = useState('');
  const [listTargetSelected, setListTargetSelected] = useState('');
  const [listTypeSelected, setListTypeSelected] = useState('');
  const [schedule, setSchedule] = useState(false);
  const [inputLabel, setInputLabel] = useState('Target URL');

  const [selectedAccount, setSelectedAccount] = useState(null);
  const { id, username, platform } = selectedAccount || {};

  useEffect(() => {
    if (tsk_id) {
      setSelectParam(tsk_id);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectParam) {
      setSelectedAccount(
        allAccounts.find((acc) => acc.username === selectParam)
      );
    }
  }, [allAccounts, selectParam, selectedAccount]);

  useEffect(() => {
    switch (listTargetSelected) {
      case 'Post':
        setInputLabel('Target URL');
        break;
      case 'Account':
        setInputLabel('@username');
        break;
      default:
        setInputLabel('Target URL');
    }
  }, [listTargetSelected]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const scheduledDate = new Date(`${data.date} ${data.time}`).toUTCString();
    const notScheduled = new Date().toUTCString();
    const payload = {
      account_id: id,
      task_type: data.Action,
      list_type: `${data.ListTarget}:${data.ListType}`,
      target_url: data.targetUrl,
      custom_messages: data.customMessages,
      custom_comments: data.customComments,
      schedule,
      date: schedule ? scheduledDate : notScheduled,
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
      setListTargetSelected('');
      setListTypeSelected('');
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
          <h1>TSK</h1>
          {selectedAccount && (
            <AccountInfoMin id={id} username={username} platform={platform} />
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

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {actionSelected && (
                <DropDown
                  options={listTargets}
                  setter={setListTargetSelected}
                  name={'ListTarget'}
                />
              )}
              {listTargetSelected && (
                <>
                  <IoChevronForward size="50" />
                  <DropDown
                    options={
                      listTargetSelected === 'Account'
                        ? accountListTypes
                        : postListTypes
                    }
                    setter={setListTypeSelected}
                    name={'ListType'}
                  />
                </>
              )}
            </div>

            {listTypeSelected && (
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

                {actionSelected === 'Message' ||
                  (actionSelected === 'Comment' && (
                    <div style={{ display: 'flex', gap: '.5rem' }}>
                      Optional Arguments
                      <TooltipPop
                        content="Optional arguments will overwrite your config for this task alone."
                        local="right"
                      />
                    </div>
                  ))}

                {actionSelected === 'Message Spree' && (
                  <Textarea
                    labelPlaceholder="Custom Message(s)"
                    name="customMessages"
                    type="text"
                    bordered
                    color="secondary"
                  />
                )}

                {actionSelected === 'Comment Spree' && (
                  <Textarea
                    labelPlaceholder="Custom Comment(s)"
                    name="customComments"
                    type="text"
                    bordered
                    color="secondary"
                  />
                )}

                <div
                  style={{
                    display: 'flex',
                    gap: '.5rem',
                    alignItems: 'center',
                  }}
                >
                  <label
                    htmlFor="schedule"
                    style={{ display: 'flex', gap: '.5rem' }}
                  >
                    <input
                      type="checkbox"
                      name="schedule"
                      onChange={() => setSchedule(true)}
                    />
                    Schedule?
                  </label>
                  {schedule && (
                    <>
                      <DateStyle
                        defaultValue={today}
                        type="date"
                        name="date"
                        min={today}
                        style={{ width: '100%' }}
                      />
                      <TimeStyle
                        defaultValue={thisTime}
                        type="time"
                        name="time"
                        min={thisTime}
                        style={{ width: '100%' }}
                      />
                    </>
                  )}
                </div>
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

export default TSK;
