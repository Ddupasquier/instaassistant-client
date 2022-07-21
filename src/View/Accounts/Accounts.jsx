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
        </div>
        <div className="ads">
          <h3>Twitter - Coming soon!</h3>
          <h3>TikTok - Coming Soon!</h3>
          <h3>Facebook - Coming soon!</h3>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
