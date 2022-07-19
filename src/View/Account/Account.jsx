import React from 'react';
import './scss/account-styles.css';
import Button from '../../Components/Button';

const Profile = () => {
  return (
    <div className="account-container">
      <div className="head">
        <h3>@Username</h3>
      </div>
      <div className="account-buttons">
        <Button text={'Back'} />
        <Button text={'Edit'} />
      </div>
      <div className="account-main">
        <div className="account-controls">
          <div className="action-log">Action Log +</div>
          <div className="controls">Add or GO</div>
        </div>
        <div className="account-log inset"></div>
      </div>
    </div>
  );
};

export default Profile;
