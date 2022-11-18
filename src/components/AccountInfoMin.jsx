import React from 'react';
import Avatar from 'react-avatar';
import { Text } from '@nextui-org/react';
import { platformIcon } from 'utils';

function AccountInfoMin({ currentAccount }) {
  if (currentAccount) {
    return (
      <div>
        <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
          {platformIcon(currentAccount.platform)}
        </div>

        <div className="user">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'right',
              alignItems: 'center',
              marginRight: '2rem',
            }}
          >
            <Avatar
              name={currentAccount.username}
              round
              value="25%"
              size="65"
              textSizeRatio={2}
            />
            <Text>@{currentAccount.username}</Text>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountInfoMin;
