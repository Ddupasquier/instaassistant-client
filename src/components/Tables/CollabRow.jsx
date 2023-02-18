import React, { useContext } from 'react';
import Avatar from 'react-avatar';
import { Button } from '@nextui-org/react';
import { ThemeContext } from 'contexts/themeContext';
import { useParams } from 'react-router-dom';
import { DeleteCollaborator } from 'api';

function CollabRow({ collab, setCollabs, collabs }) {
  const { account_id } = useParams();
  const { isDark } = useContext(ThemeContext);

  const deleteCollabUi = (account_id) => {
    const newCollabs = collabs.filter(
      (collab) => collab.account_id !== account_id
    );
    setCollabs(newCollabs);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '.5rem',
        background: isDark ? 'black' : 'white',
        borderRadius: '50rem',
        marginTop: '.5rem',
      }}
    >
      <div
        aria-label="username-cell"
        role="cell"
        style={{ width: 'fit-content' }}
      >
        <Avatar
          name={collab.username}
          round
          value="25%"
          size="50"
          textSizeRatio={2}
        />
      </div>
      <div
        aria-label="general-cell"
        role="cell"
        style={{ textAlign: 'left', width: '100%', paddingLeft: '1rem' }}
      >
        <b>{collab.email}</b>
        <br />
        {collab.username}
      </div>
      <div
        aria-label="remove-cell"
        role="cell"
        style={{ paddingRight: '.5rem' }}
      >
        <Button
          color="error"
          auto
          rounded
          onClick={() => {
            DeleteCollaborator(collab.id);
            deleteCollabUi(collab.id);
          }}
        >
          Remove
        </Button>
      </div>
    </div>
  );
}

export default CollabRow;
