/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from 'react-avatar';
import { Text } from '@nextui-org/react';
import { platformIcon } from 'utils';
import Loader from './Loader';

function AccountInfoMin({ username, platform, currentAccount = null }) {
  const navigate = useNavigate();
  const [info, setInfo] = useState({ username, platform, currentAccount });

  useEffect(() => {
    setInfo({ username, platform, currentAccount });
  }, [username, platform, currentAccount]);

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
              <div
                onClick={() => navigate(`/accounts/${info.currentAccount}`)}
                style={{ cursor: 'pointer' }}
              >
                <Avatar
                  name={info.username}
                  round
                  value="25%"
                  size="65"
                  textSizeRatio={2}
                />
              </div>

              <Text
                onClick={() => navigate(`/accounts/${info.currentAccount}`)}
                css={{ cursor: 'pointer' }}
              >
                @{info.username}
              </Text>
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
