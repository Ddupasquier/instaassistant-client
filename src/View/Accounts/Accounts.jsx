/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { Collapse, Text, Button, Input, Loading, Card } from '@nextui-org/react';
import './scss/accounts-styles.css';
import { AccountCardNext } from 'Components/AccountCardNext';
import NewAccountModal from './NewAccountModal';
import NewAccountCardButtonNext from 'Components/AccountCardNext/NewAccountCardButton';
import { indexAccounts } from 'api';

function Accounts() {
  const [accountLoaded, setAcccountsLoaded] = useState(false);

  useEffect(() => {
    indexAccounts().then((data) => setAllAccounts(data));
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [allAccounts, setAllAccounts] = useState([]);

  const filteredAccounts = allAccounts
    .filter((account) => {
      return account.username.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .sort((a, b) => {
      return a.username.localeCompare(b.username);
    });

  const [newAccountVisible, setNewAccountVisible] = useState(false);
  const newAccountHandler = () => setNewAccountVisible(true);
  const closeNewAccountHandler = () => {
    setNewAccountVisible(false);
  };

  return (
    <>
      <div className="view-container">
        <div className="accounts-main">
          <Text
          h1
          size={60}
          css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
          style={{zIndex: 1}}
          weight="bold"
          >
            Account Management
          </Text>
          <Card css={{
          backdropFilter: 'blur(15px)',
          background: '$myColor',
          zIndex: 1,
          alignItems: 'center',
          margin: 'auto',
          }}>
          <Collapse.Group css={{ width: '100%' }}>
            <Collapse title="Instagram" expanded>
              <div className="instagram-container">
                <div className="options">
                  <Button type="button" size="sm" color="warning" rounded>
                    List View
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    color="warning"
                    rounded
                    onPress={newAccountHandler}
                  >
                    Add Account
                  </Button>
                  <Input
                    clearable
                    underlined
                    labelPlaceholder="Search"
                    color="secondary"
                    size="xl"
                    onChange={(e) => setSearchTerm(e.target.value)}
                  ></Input>
                </div>
                <div
                  className="instagram-cards"
                  style={{
                    minHeight: '15rem',
                  }}
                >
                  {allAccounts.length > 0 &&
                    filteredAccounts.map((account, index) => (
                      <AccountCardNext
                        path={'/instagram/account/' + account.id}
                        username={account.username}
                        key={index}
                      />
                    ))}
                  <NewAccountCardButtonNext handler={newAccountHandler} />
                </div>
              </div>
            </Collapse>
            <Collapse title="TikTok">
              <Text>Coming soon!</Text>
            </Collapse>
            <Collapse title="Twitter">
              <Text>Coming soon!</Text>
            </Collapse>
            <Collapse title="Facebook">
              <Text>Coming soon!</Text>
            </Collapse>
            <Collapse title="Youtube">
              <Text>Coming soon!</Text>
            </Collapse>
          </Collapse.Group>
          </Card>
        </div>
            <NewAccountModal
            newAccountHandler={newAccountHandler}
            closeNewAccountHandler={closeNewAccountHandler}
            newAccountVisible={newAccountVisible}
          />
      </div>
    </>
  )
}

export default Accounts;
