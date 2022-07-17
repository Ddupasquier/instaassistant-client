/*

'Active' state resetting on re render. Figure out how to prevent this.

*/

import React, { useState } from 'react';
import * as Gear from 'react-icons/bs';
import * as User from 'react-icons/fa';
import * as Graph from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import './scss/menu-styles.css';

const Menu = () => {
  const [settings, setSettings] = useState(false);
  const [account, setAccount] = useState(false);
  const [accounts, setAccounts] = useState(false);
  const [metrics, setMetrics] = useState(false);
  const [settingsActive, setSettingsActive] = useState(false);
  const [accountActive, setAccountActive] = useState(false);
  const [accountsActive, setAccountsActive] = useState(false);
  const [metricsActive, setMetricsActive] = useState(false);

  const popOutStyle = {
    transform: `translate(80px, 0)`,
  };

  return (
    <>
      <div className="menu">
        <div
          className={settingsActive ? 'active' : null}
          onMouseEnter={() => setSettings(true)}
          onMouseLeave={() => setSettings(false)}
          onClick={() => {
            setSettingsActive(true);
            setAccountActive(false);
            setAccountsActive(false);
            setMetricsActive(false);
          }}
        >
          <Link to="/settings" className="menu-item">
            <Gear.BsGearWideConnected />
          </Link>
        </div>
        <div
          className={accountActive ? 'active' : null}
          onMouseEnter={() => setAccount(true)}
          onMouseLeave={() => setAccount(false)}
          onClick={() => {
            setSettingsActive(false);
            setAccountActive(true);
            setAccountsActive(false);
            setMetricsActive(false);
          }}
        >
          <Link to="/account" className="menu-item">
            <User.FaUserAlt />
          </Link>
        </div>
        <div
          className={accountsActive ? 'active' : null}
          onMouseEnter={() => setAccounts(true)}
          onMouseLeave={() => setAccounts(false)}
          onClick={() => {
            setSettingsActive(false);
            setAccountActive(false);
            setAccountsActive(true);
            setMetricsActive(false);
          }}
        >
          <Link to="/accounts" className="menu-item">
            <User.FaUserFriends />
          </Link>
        </div>
        <div
          className={metricsActive ? 'active' : null}
          onMouseEnter={() => setMetrics(true)}
          onMouseLeave={() => setMetrics(false)}
          onClick={() => {
            setSettingsActive(false);
            setAccountActive(false);
            setAccountsActive(false);
            setMetricsActive(true);
          }}
        >
          <Link to="/metrics" className="menu-item">
            <Graph.VscGraphLine />
          </Link>
        </div>
      </div>
      <div className="popovers">
        <div style={settings ? popOutStyle : null}>
          <span>Settings</span>
        </div>
        <div style={account ? popOutStyle : null}>
          <span>User</span>
        </div>
        <div style={accounts ? popOutStyle : null}>
          <span>Accounts</span>
        </div>
        <div style={metrics ? popOutStyle : null}>
          <span>Metrics</span>
        </div>
      </div>
    </>
  );
};

export default Menu;
