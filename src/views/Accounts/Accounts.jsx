import React, { Suspense, useState, useTransition, useContext } from 'react';
import { ModalContext } from 'contexts/modalContext';
import './accounts-styles.scss';

// * NEXTUI IMPORTS
import { Text, Button, Input, Card } from '@nextui-org/react';

// * COMPONENT IMPORTS
import NewAccountModal from './NewAccountModal';
import DeleteConfirm from '../../components/Modals/DeleteConfirm';
import Loader from 'components/Loader';
import AccountsTable from 'components/Tables/AccountsTable';
import AppsModal from 'components/Modals/AppsModal';

function Accounts() {
  const { newAccountHandler } = useContext(ModalContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [isUpdating, startUpdating] = useTransition();

  function updateSearchTerm(newVal) {
    startUpdating(() => {
      setSearchTerm(newVal);
    });
  }

  return (
    <>
      <div className="accounts-container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '0',
            padding: '1rem',
            maxHeight: '10%',
          }}
        >
          {' '}
          <Text
            h1
            size={60}
            css={{
              textGradient: '45deg, $blue600 -20%, $pink600 50%',
              height: 'fit-content',
            }}
            weight="bold"
          >
            Account Management
          </Text>
          <Input
            clearable
            underlined
            placeholder="Search"
            aria-label="search"
            color="secondary"
            size="xl"
            onChange={(e) => {
              updateSearchTerm(e.target.value);
            }}
          />
          <Button
            type="button"
            color="secondary"
            rounded
            onPress={newAccountHandler}
          >
            Add Account
          </Button>
        </div>
        {isUpdating ? (
          <Loader />
        ) : (
          <Suspense fallback={<Loader />}>
            <Card css={{ width: '95%', margin: 'auto' }}>
              <AccountsTable isUpdating={isUpdating} searchTerm={searchTerm} />
            </Card>
          </Suspense>
        )}
      </div>
      <NewAccountModal />
      <DeleteConfirm />
      <AppsModal />
    </>
  );
}

export default Accounts;
