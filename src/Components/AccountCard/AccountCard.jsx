/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { User } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import './scss/accountcard-styles.css';

function AccountCard() {
  const [following, setFollowing] = useState(0);
  const [followers, setFollowers] = useState(0);

  const someNumber = 23.5;

  useEffect(() => {
    // some fetch to the API to grab followers and following
    // and set the state of the component
    setFollowing(someNumber);
    setFollowers(someNumber);
  }, []);

  return (
    <div className="card">
      <User
        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        name="@Username"
        size="xl"
      />
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the cards content.
      </p>
      <h5 className="card-title">
        FOLLOWERS: <span>{followers} K</span>
      </h5>
      <h5 className="card-title">
        FOLLOWING: <span>{following} K</span>
      </h5>
      <div className="card-buttons">
        <Link to="/config" className="button outset">
          Edit
        </Link>
        &nbsp;
        <Link to="/account" className="button outset">
          Start Task
        </Link>
      </div>
    </div>
  );
}

export default AccountCard;
