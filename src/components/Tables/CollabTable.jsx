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
        setCollabs(res.data);
        console.log(collabs);
      }
    });
  }, [account_id]);

  return (
    <table role="table" aria-label="collab-table">
      <tbody>
        {/* {collabs && collabs.map((user, i) => <CollabRow key={i} user={user} />)} */}
      </tbody>
    </table>
  );
}

export default CollabTable;
