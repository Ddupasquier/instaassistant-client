import React from 'react';
import Avatar from 'react-avatar';
import { Text } from '@nextui-org/react';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoYoutube } from 'react-icons/io';
import { IoLogoTiktok } from 'react-icons/io5';

function AccountInfoMin({ currentAccount }) {
  const platformIcon = () => {
    if (currentAccount.platform === 'INSTAGRAM') {
      return <FiInstagram size="20" />;
    } else if (currentAccount.platform === 'YOUTUBE') {
      return <IoLogoYoutube size="20" />;
    } else if (currentAccount.platform === 'TIKTOK') {
      return <IoLogoTiktok size="20" />;
    } else {
      return <FiInstagram size="20" />;
    }
  };

  if (currentAccount) {
    return (
      <div>
        <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
          {platformIcon()}
        </div>

        <div className="user">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'right',
              alignItems: 'center',
              marginRight: '1rem',
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
