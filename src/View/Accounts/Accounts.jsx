/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import './scss/accounts-styles.css';
import { AccountCard } from '../../Components/AccountCard';

function Accounts() {
  const [iconView, setIconView] = useState(false);

  return (
    <div className="accounts-container">
      <div className="accounts-main">
        <legend>Instagram</legend>
        <div className="instagram-container">
          <div className="options">
            <Button
              type="button"
              onClick={() => setIconView(!iconView)}
              size="xs"
              color="warning"
              rounded
            >
              Icon View
            </Button>
          </div>
          <div className="instagram-cards">
            <AccountCard iconView={iconView} />
            <AccountCard iconView={iconView} />
            <AccountCard iconView={iconView} />
            <AccountCard iconView={iconView} />
            <AccountCard iconView={iconView} />
            <AccountCard iconView={iconView} />
            <AccountCard iconView={iconView} />
            <AccountCard iconView={iconView} />
            <AccountCard iconView={iconView} />
            <AccountCard iconView={iconView} />
          </div>
        </div>
        <div className="ads">
          <p>Twitter - Coming soon!</p>
          <p>TikTok - Coming Soon!</p>
          <p>Facebook - Coming soon!</p>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
