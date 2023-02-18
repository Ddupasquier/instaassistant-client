import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CollabRow from './CollabRow';
import { GetCollaborators } from 'api';

function CollabTable() {
  const { account_id } = useParams();
  const [collabs, setCollabs] = useState([]);

  useEffect(() => {
    GetCollaborators(account_id).then((res) => {
      if (res) {
        setCollabs(res);
      }
    });
  }, []);

  return (
    <div>
      {collabs &&
        collabs.map((collab, i) => <CollabRow key={i} collab={collab} setCollabs={setCollabs} collabs={collabs} />)}
    </div>
  );
}

export default CollabTable;
