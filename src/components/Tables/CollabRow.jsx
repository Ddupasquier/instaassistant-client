import React, { useContext } from 'react';
import Avatar from 'react-avatar';
import { Button } from '@nextui-org/react';
import { ThemeContext } from 'contexts/themeContext';

function CollabRow({ collab }) {
  const { isDark } = useContext(ThemeContext);
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
        <Button color="error" auto rounded>
          Remove
        </Button>
      </div>
    </div>
  );
}

export default CollabRow;
