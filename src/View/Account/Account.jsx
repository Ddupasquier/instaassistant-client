import React, { useState } from 'react';
import './scss/account-styles.css';
import { Link } from 'react-router-dom';

const Account = () => {
  // const [followers, setFollowers] = useState(0);
  // const [following, setFollowing] = useState(0);
  const [controlsShown, setControlsShown] = useState(false);
  const logText = 'Woah';

  const controlsStyle = {
    display: 'block',
    width: controlsShown ? '15rem' : '0',
    height: controlsShown ? '20rem' : '0',
  };

  const screenStyle = {
    maxWidth: controlsShown ? '100%' : '100%',
    minWidth: controlsShown ? '50%' : '100%',
    height: controlsShown ? '100%' : '50%',
    resize: controlsShown ? 'none' : 'vertical',
  };

  return (
    <div className="account-container">
      <div className="account-buttons">
        <Link className="button outset" to="/accounts">
          Accounts
        </Link>

        <Link className="button outset" to="/config">
          Edit
        </Link>
      </div>
      <div className="account-head">
        <section>
          <span>@Username</span>
        </section>
        <section>
          <label>Followers</label>
          <div className="followers inset">23.5 K</div>
        </section>
        <section>
          <label>Following</label>
          <div className="following inset">23.5 K</div>
        </section>
      </div>

      <div className="account-main">
        <div className="account-buttons">
          <b>Action Log</b>{' '}
          <Link to="/metrics" className="button outset">
            Metrics
          </Link>
          <button
            className="add outset button"
            onClick={() => setControlsShown(!controlsShown)}
          >
            {controlsShown ? 'Hide Controls' : 'Add Rules'}
          </button>
        </div>
        <div className="controls-screen">
          <div
            className="account-controls outset"
            style={controlsShown ? controlsStyle : null}
          >
            <form>
              <select name="options" className="options">
                <option value="">Select an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <br />
              <input
                type="text"
                placeholder="param-one"
                className="param-one"
              />
              <textarea
                type="text"
                placeholder="param-two"
                className="param-two"
              />
            </form>
          </div>
          <div className="account-log inset" style={screenStyle}>
            {logText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
