import React, { useState } from 'react';

import { useParams } from 'react-router-dom';

import AccountInformation from './AccountInformation';
import AccountCollaboration from './AccountCollaboration';
import AccountAdmin from './AccountAdmin';

import { Card, Button } from '@nextui-org/react';
import { unstickAccount } from 'api';
import './account-update-styles.scss';
import CollabModal from 'components/Modals/CollabModal';

const AccountUpdate = () => {
  const { account_id } = useParams();
  const [displayType, setDisplayType] = useState('account');

  const handleUnstick = () => {
    unstickAccount(account_id);
  };

  return (
    <>
      <div className="view-container">
        <Card
          css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: 'fit-content',
            width: '90%',
          }}
        >
          <ul className="selections">
            <li>
              <Button
                onClick={() => setDisplayType('account')}
                color="secondary"
              >
                Account Information
              </Button>
            </li>
            <li>
              <Button
                onClick={() => setDisplayType('collaboration')}
                color="secondary"
              >
                Collaboration
              </Button>
            </li>
            <li>
              <Button
                onClick={() => setDisplayType('administration')}
                color="secondary"
              >
                Administration
              </Button>
            </li>
            <li>
              <Button onClick={handleUnstick} color="error">
                Unstick Account
              </Button>
            </li>
          </ul>

          <div className="display">
            {displayType === 'account' && <AccountInformation />}
            {displayType === 'collaboration' && <AccountCollaboration />}
            {displayType === 'administration' && <AccountAdmin />}
          </div>
        </Card>
      </div>
      <CollabModal accountId={account_id} />
    </>
  );
};

export default AccountUpdate;
