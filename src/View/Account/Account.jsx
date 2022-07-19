import React, { useEffect, useState } from 'react';
import './scss/account-styles.css';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [onScreen, setOnScreen] = useState('');

  let logText = 'your mom';

  useEffect(() => {
    setOnScreen(logText);
  }, [logText]);

  return (
    <div className="account-container">
      <div className="head">
        <h3>@Username</h3>
      </div>
      <div className="account-buttons">
        <Link className="button outset" to="/accounts">
          Back
        </Link>
        <Link className="button outset" to="">
          Edit
        </Link>
      </div>
      <div className="account-main">
        <div className="account-controls">
          <div className="action-log">
            <b>Action Log</b> +
          </div>
          <div className="controls">
            <b>ADD</b> or <b>GO</b>
          </div>
        </div>
        <div className="account-log inset">{onScreen}</div>
      </div>
    </div>
  );
};

export default Profile;
