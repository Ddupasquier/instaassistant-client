import React from 'react';
import './scss/accounts-styles.css';
import { AccountCard } from '../../Components/AccountCard';

function Accounts() {
  return (
    <div className="accounts-container">
      <div className="head">
        <h3>Instagram</h3>
        <hr />
      </div>

      <div className="accounts-main">
        <div className="accounts-cards outset">
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
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
