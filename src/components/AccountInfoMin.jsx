import React, { useEffect, useState } from 'react';
import Avatar from 'react-avatar';
import { Text } from '@nextui-org/react';
import { platformIcon } from 'utils';
import Loader from './Loader';

function AccountInfoMin({ username, platform }) {
  const [info, setInfo] = useState({ username, platform });

  useEffect(() => {
    setInfo({ username, platform });
  }, [username, platform]);

  return (
    <div>
      {info ? (
        <>
          <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
            {platformIcon(info.platform)}
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
                name={info.username}
                round
                value="25%"
                size="65"
                textSizeRatio={2}
              />
              <Text>@{info.username}</Text>
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
