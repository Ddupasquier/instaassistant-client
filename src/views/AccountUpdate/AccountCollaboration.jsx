import React, { useContext } from 'react';
import { ModalContext } from 'contexts/modalContext';
import { ThemeContext } from 'contexts/themeContext';
import './account-update-styles.scss';
import { Input, Card, Button } from '@nextui-org/react';
import { MagnifyingGlass } from 'assets';
import CollabTable from 'components/Tables/CollabTable';

function AccountCollaboration() {
  const {collabHandler} = useContext(ModalContext);
  const { isDark } = useContext(ThemeContext);

  return (
    <div className="account-collaboration">
      <div className="head">
        <h1>Manage Access</h1>
        <Button color="warning" auto onClick={collabHandler}>
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
