/*

'Active' state resetting on re render. Figure out how to prevent this.

*/

import React, { useState } from 'react';
import * as Gear from 'react-icons/bs';
import * as User from 'react-icons/fa';
import * as Graph from 'react-icons/vsc';
// import { NavLink } from 'react-router-dom';
import './scss/menu-styles.css';

const Menu = () => {
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);
  const [d, setD] = useState(false);
  const [aActive, setAActive] = useState(false);
  const [bActive, setBActive] = useState(false);
  const [cActive, setCActive] = useState(false);
  const [dActive, setDActive] = useState(false);

  const popOutStyle = {
    transform: `translate(80px, 0)`,
  };

  return (
    <>
      <div className="menu">
        <div
          className={aActive ? 'active' : null}
          onMouseEnter={() => setA(true)}
          onMouseLeave={() => setA(false)}
          onClick={() => {
            setAActive(true);
            setBActive(false);
            setCActive(false);
            setDActive(false);
          }}
        >
          <a href="/">
            <Gear.BsGearWideConnected />
          </a>
        </div>
        <div
          className={bActive ? 'active' : null}
          onMouseEnter={() => setB(true)}
          onMouseLeave={() => setB(false)}
          onClick={() => {
            setAActive(false);
            setBActive(true);
            setCActive(false);
            setDActive(false);
          }}
        >
          <a href="/">
            <User.FaUserAlt />
          </a>
        </div>
        <div
          className={cActive ? 'active' : null}
          onMouseEnter={() => setC(true)}
          onMouseLeave={() => setC(false)}
          onClick={() => {
            setAActive(false);
            setBActive(false);
            setCActive(true);
            setDActive(false);
          }}
        >
          <a href="/">
            <User.FaUserFriends />
          </a>
        </div>
        <div
          className={dActive ? 'active' : null}
          onMouseEnter={() => setD(true)}
          onMouseLeave={() => setD(false)}
          onClick={() => {
            setAActive(false);
            setBActive(false);
            setCActive(false);
            setDActive(true);
          }}
        >
          <a href="/">
            <Graph.VscGraphLine />
          </a>
        </div>
      </div>
      <div className="popovers">
        <div style={a ? popOutStyle : null}>
          <span>Settings</span>
        </div>
        <div style={b ? popOutStyle : null}>
          <span>User</span>
        </div>
        <div style={c ? popOutStyle : null}>
          <span>Accounts</span>
        </div>
        <div style={d ? popOutStyle : null}>
          <span>Metrics</span>
        </div>
      </div>
    </>
  );
};

export default Menu;
