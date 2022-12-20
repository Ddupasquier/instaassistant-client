import React from 'react';
import Avatar from 'react-avatar';
import { Text } from '@nextui-org/react';
import { platformIcon } from 'utils';
import Loader from './Loader';

function AccountInfoMin({ username, platform }) {
  return (
    <div>
      {username !== undefined && platform ? (
        <>
          <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
            {platformIcon(platform)}
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
                name={username}
                round
                value="25%"
                size="65"
                textSizeRatio={2}
              />
              <Text>@{username}</Text>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default AccountInfoMin;
