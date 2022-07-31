/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { Button, Collapse, Text } from '@nextui-org/react';
import './scss/accounts-styles.css';
import { AccountCard } from '../../Components/AccountCard';
import AccountCardNext from '../../Components/AccountCardNext';

function Accounts() {
  const [iconView, setIconView] = useState(true);

  return (<>
    <div className="accounts-container">
      <div className="accounts-main">
      <Collapse.Group>
        <Collapse title="Instagram" expanded>
        <div className="instagram-container">
          <div className="options">
            <Button
              type="button"
              onClick={() => setIconView(!iconView)}
              size="xs"
              color="warning"
              rounded
            >
              List View
            </Button>
          </div>
          <div className="instagram-cards">
            <AccountCardNext/>
            <AccountCardNext/>
            <AccountCardNext/>
            <AccountCardNext/>
            <AccountCardNext/>
            <AccountCardNext/>
            <AccountCardNext/>
            <AccountCardNext/>
            <AccountCardNext/>
            <AccountCardNext/>
            <AccountCardNext/>
            <AccountCardNext/>
            <AccountCardNext/>
            <AccountCardNext/>
            <AccountCardNext/>
            <AccountCardNext/>
            <AccountCardNext/>
            <AccountCardNext/>
          </div>
        </div>
        </Collapse>
        <Collapse title="TikTok" >
          <Text>
            Comming Soon
          </Text>
        </Collapse>
        <Collapse title="Twitter">
          <Text>
          Comming Soon
          </Text>
        </Collapse>
        <Collapse title="Facebook">
          <Text>
          Comming Soon
          </Text>
        </Collapse>
        <Collapse title="Youtube">
          <Text>
          Comming Soon
          </Text>
        </Collapse>
      </Collapse.Group>
      </div>
    </div></>
  );
}

export default Accounts;
