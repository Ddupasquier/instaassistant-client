import React, { useState } from 'react';
import 'globals/global-classes.scss';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import { Menu } from 'components/Menu';
import BackgroundAnimation from 'components/Background/BackgroundAnimation';
import { Sidebar as Example } from "components/Sidebar/Sidebar.tsx";

function App() {
  const [menuItemHovered, setMenuItemHovered] = useState('');

  // const animateLogo = (name) => {
  //   if (name === 'Billing') {
  //     setMenuSeleted('Billing');
  //   } else if (name === 'Profile') {
  //     setMenuSeleted('Profile');
  //   } else if (name === 'Accounts') {
  //     setMenuSeleted('Accounts');
  //   } else {
  //     setMenuSeleted('');
  //   }
  // };

  return (
    <div className="App">
      <div className="app">
        <Header />
        {localStorage.getItem('email') && (
          <Menu
            menuItemHovered={menuItemHovered}
            setMenuItemHovered={setMenuItemHovered}
          />
          // <Example />
        )}

        <Outlet />
        <BackgroundAnimation />
      </div>
    </div>
  );
}

export default App;
