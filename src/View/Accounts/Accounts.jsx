/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { Collapse, Text, Button, Input, Loading } from '@nextui-org/react';
import './scss/accounts-styles.css';
import { AccountCardNext } from '../../Components/AccountCardNext';
import NewAccountModal from './NewAccountModal';
import { indexAccounts } from '../../api';
import { useDispatch, useSelector } from 'react-redux';

import { GetAccounts } from "../../redux/AccountsStore/Actions"

function Accounts() {
  const { Accounts :accounts, Loading :loading } = useSelector((state) => state.accountsStore )
  const dispatch = useDispatch()
  
  const [newAccountVisible, setNewAccountVisible] = useState(false);

  //const [accounts, setAccounts] = useState({})
  //const [accountsLoaded,setAccountsLoaded] = useState(false)

  const newAccountHandler = () => setNewAccountVisible(true);
  const closeNewAccountHandler = () => {
    setNewAccountVisible(false);
  };

  // const [listView, setListView] = useState(false);
  // console.log(listView)

  useEffect(() => {
    dispatch(GetAccounts())
    // indexAccounts()
    //   .then((data) => setAccounts(data))
    //   .then(() => setAccountsLoaded(true));
  }, []);

  console.log(accounts)

  return (
    <>
      <div className="accounts-container">
        <div className="accounts-main">
          <Collapse.Group>
            <Collapse title="Instagram" expanded>
              <div className="instagram-container">
                <div className="options">
                  <Button
                    type="button"
                    // onPress={() => setListView(!listView)}
                    size="sm"
                    color="warning"
                    rounded
                  >
                    List View
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    color="warning"
                    rounded
                    onClick={newAccountHandler}
                  >
                    Add Account
                  </Button>
                  <Input
                    clearable
                    underlined
                    labelPlaceholder="Search"
                    color="secondary"
                    size="xl"
                  ></Input>
                </div>
                <div className="instagram-cards">
                  {loading ?
                    (<Loading/>) : accounts.map((account) => (<AccountCardNext path={"/account/" + account.id} username={account.username} />))}
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
        </div>
      </div>
      <NewAccountModal
        newAccountHandler={newAccountHandler}
        closeNewAccountHandler={closeNewAccountHandler}
        newAccountVisible={newAccountVisible}
      />
    </>
  );
}

export default Accounts;
