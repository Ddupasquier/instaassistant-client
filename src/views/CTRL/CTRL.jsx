import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from 'contexts/userContext';
import { ModalContext } from 'contexts/modalContext';

import { Card, Button, Input, Textarea } from '@nextui-org/react';
import { Select } from 'components/styled';

import DropDown from 'components/DropDown';

import { actions } from './constants';

import { PostTask } from 'api';

import { TooltipPop } from 'components/Tooltip';
import AccountInfoMin from 'components/AccountInfoMin';

const CTRL = () => {
  const { ctrl_id } = useParams();
  const { userToApps } = useContext(ModalContext);
  const { allAccounts } = useContext(UserContext);
  const [actionSelected, setActionSelected] = useState('');
  const [inputLabel, setInputLabel] = useState('Target URL');

  const [selectedAccount, setSelectedAccount] = useState();
  const [selectedAccountName, setSelectedAccountName] = useState();
  const [selectedAccountPlatform, setSelectedAccountPlatform] = useState();

  console.log(ctrl_id)
  console.log(userToApps)

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

  useEffect(() => {
    if (userToApps) {
      setSelectedAccount(userToApps);
      setSelectedAccountName(userToApps.username);
      setSelectedAccountPlatform(userToApps.platform);
    } else {
      if (allAccounts) {
        setSelectedAccount(allAccounts[0]);
        setSelectedAccountName(allAccounts[0].username);
        setSelectedAccountPlatform(allAccounts[0].platform);
      } else {
        setSelectedAccount(null);
        setSelectedAccountName(null);
        setSelectedAccountPlatform(null);
      }
    }
  }, [allAccounts, userToApps]);

  useEffect(() => {
    if (selectedAccount) {
      setSelectedAccountName(selectedAccount.username);
      setSelectedAccountPlatform(selectedAccount.platform);
    }
  }, [selectedAccount]);

  useEffect(() => {
    if (selectedAccount) {
      const account = allAccounts.find(
        (account) => account.username === selectedAccountName
      );
      setSelectedAccount(account);
    }
  }, [allAccounts, selectedAccount, selectedAccountName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const notScheduled = new Date().toUTCString();
    const payload = {
      account_id: selectedAccount.id,
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
              username={selectedAccountName}
              platform={selectedAccountPlatform}
            />
          )}
        </div>
        <br />
        {localStorage.getItem('email') && !userToApps && (
          <Select
            onChange={(e) => {
              setSelectedAccountName(e.target.value);
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
        )}

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
