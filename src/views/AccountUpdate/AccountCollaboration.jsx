import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'contexts/themeContext';
import './account-update-styles.scss';
import { Input, Text, Card, Link, Button } from '@nextui-org/react';
import { MagnifyingGlass } from 'assets';
import CollabTable from 'components/Tables/CollabTable';
// import { HiMagnifyingGlass } from 'react-icons/hi';
// import { RxMagnifyingGlass } from 'react-icons/rx';

function AccountCollaboration() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className="account-collaboration">
      <div className="head">
        <h1>Manage Access</h1>
        <Button color="warning" auto>
          Add people
        </Button>
      </div>
      <div className="content">
        <Card
          css={{ background: `$menu`, padding: '1rem', dropShadow: 'none' }}
        >
          <Input
            placeholder="Find a collaborator..."
            contentLeft={<MagnifyingGlass color={isDark ? "white" : "black"} />}
          />
          <CollabTable />
        </Card>
      </div>
    </div>
  );
}

export default AccountCollaboration;
