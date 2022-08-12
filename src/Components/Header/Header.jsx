import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import './scss/header-styles.css';
import { Logout } from '../../api';
import LogoAnimation from './LogoAnimation';
import { useSelector } from 'react-redux';

function Header({ menuSelected }) {
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

  const username = currentAccount.username;

  const capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <header>
      <LogoAnimation menuSelected={menuSelected} />
      <div className="site-name">
        <i>Marcus</i>
        <b>Bot</b>
      </div>
      <div className="username">
        {capFirstLetter(String(username))} {'  '}
        <Button
          href="/"
          onClick={Logout}
          size="xs"
          color="warning"
          css={{ marginLeft: '1rem' }}
        >
          Logout
        </Button>
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  menuSelected: PropTypes.string.isRequired,
};
