import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from 'contexts/userContext';

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
  const { accounts } = useContext(UserContext);
  const [actionSelected, setActionSelected] = useState('');
  const [listTargetSelected, setListTargetSelected] = useState('');
  const [listTypeSelected, setListTypeSelected] = useState('');
  const [currentAccountName, setCurrentAccountName] = useState();
  const [currentAccount, setCurrentAccount] = useState({});
  const [schedule, setSchedule] = useState(false);

  useEffect(() => {
    if (currentAccountName) {
      const thisAccount = accounts.find(
        (account) => account.username === currentAccountName
      );
      setCurrentAccount(thisAccount);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accounts, currentAccountName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const scheduledDate = new Date(`${data.date} ${data.time}`).toUTCString();
    const notScheduled = new Date().toUTCString();
    const payload = {
      account_id: currentAccount.id,
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
      window.location.replace('/TSK');
    } else {
      alert('Task successfully created!');
    }
    window.location.replace('/TSK');
  };

  // console.log(typeof tsk_id, 'before filter');
  // const filterAccount = (tsk_id) => {
  //   if (tsk_id !== '') {
  //     console.log(tsk_id);
  //     const filteredAccount = accounts.filter(
  //       (account) => account.id === tsk_id
  //     );
  //     return filteredAccount;
  //   }
  //   return null;
  // };

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
          {currentAccountName && (
            <AccountInfoMin
              username={currentAccount?.username}
              platform={currentAccount?.platform}
            />
          )}
        </div>
        <br />
        {localStorage.getItem('email') && (
          <Select
            onChange={(e) => {
              setCurrentAccountName(e.target.value);
            }}
            defaultValue={
              accounts &&
              tsk_id !== '' &&
              accounts.filter((account) => account.username === tsk_id)
            }
          >
            <option value={null} style={{ color: 'black' }}>
              Select an account
            </option>
            {accounts &&
              accounts.map(
                (account) => (
                  // account.id === Number(tsk_id) ? (
                  //   <option
                  //     key={account.id}
                  //     value={account.username}
                  //     style={{ color: 'black' }}
                  //     selected
                  //   >
                  //     {account.username}
                  //   </option>
                  // ) : (
                  <option
                    key={account.id}
                    value={account.username}
                    style={{ color: 'black' }}
                  >
                    {account.username}
                  </option>
                )
                // )
              )}
          </Select>
        )}

        {currentAccountName && (
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
                    labelPlaceholder="Target URL"
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
        )}
      </Card>
    </div>
  );
};

export default TSK;
