/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from 'react-avatar';
import { Text } from '@nextui-org/react';
import { platformIcon } from 'utils';
import Loader from './Loader';

function AccountInfoMin({ id, username, platform }) {
  const navigate = useNavigate();
  const [info, setInfo] = useState({ id, username, platform });

  useEffect(() => {
    setInfo({ id, username, platform });
  }, [id, username, platform]);

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
                onClick={() => navigate(`/accounts/${info.id}`)}
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
                onClick={() => navigate(`/accounts/${info.id}`)}
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
