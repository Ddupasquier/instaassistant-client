import React, { useEffect, useState } from 'react';
import { Button, Textarea, Switch, Grid } from '@nextui-org/react';
import './scss/instaconfig-styles.css';
import { Link, useParams } from 'react-router-dom';
import { UserIcon } from '../../Components/UserIcon';
import { useSelector } from 'react-redux';

function InstagramConfig() {
  const { account_id } = useParams();
  const { Accounts: accounts, Loading: loading } = useSelector(
    (state) => state.accountsStore
  );

  const [currentAccount, setCurrentAccount] = useState({});

  useEffect(() => {
    accounts.map((account) => {
      return account.id === Number(account_id) && setCurrentAccount(account);
    });
  }, [account_id, accounts]);

  const textareas = [
    {
      legend: 'Look Alike',
    },
    {
      legend: 'White List',
    },
    {
      legend: 'Black List',
    },
    {
      legend: 'Comments',
    },
    {
      legend: 'Direct Messages',
    },
  ];

  const switches = [
    {
      legend: 'Allow likes:',
      value: true,
    },
    {
      legend: 'Allow comments:',
      value: true,
    },
    {
      legend: 'Allow follows:',
      value: true,
    },
    {
      legend: 'Allow messages:',
      value: true,
    },
  ];

  return (
    <div className="insta-config">
      <div className="config-user">
        <h2>Configuration</h2>
        {!loading && (
          <UserIcon
            size="xl"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            name={'@' + currentAccount.username}
          />
        )}
      </div>
      <form>
        <div className="config-toggles">
          <Grid.Container justify="space-evenly">
            {switches.map((switchItem, index) => (
              <Grid sm={3} xs={1} key={index} justify="center">
                <section>
                  <label>{switchItem.legend}</label>
                  <br />
                  <Switch
                    label={switchItem.legend}
                    checked={switchItem.value}
                  />
                </section>
              </Grid>
            ))}
          </Grid.Container>
        </div>
        <br />
        <div className="config-textareas">
          <Grid.Container gap={2.5}>
            {textareas.map((textarea, index) => (
              <Grid sm={6} xs={12} key={index}>
                <Textarea
                  width="95%"
                  bordered
                  status="default"
                  key={textarea.legend}
                  labelPlaceholder={textarea.legend}
                  legend={textarea.legend}
                  css={{
                    backdropFilter: 'saturate(200%) blur(8px)',
                    background: 'rgba(255, 255, 255, 0.2)',
                    fontWeight: 'bold',
                  }}
                />
              </Grid>
            ))}
          </Grid.Container>
        </div>
        <div className="config-buttons">
          <Button type="button" color="secondary" size="sm" rounded>
            Save
          </Button>
          <Button type="button" color="secondary" size="sm" rounded>
            <Link to="/account" className="button">
              Save and Exit
            </Link>
          </Button>
          <Button type="button" color="secondary" size="sm" rounded>
            <Link to="/account" className="button">
              Cancel
            </Link>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default InstagramConfig;
