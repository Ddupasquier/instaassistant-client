import React from 'react';
import 'globals/global-classes.scss';
import { Outlet } from 'react-router-dom';
import BackgroundAnimation from 'components/Background/BackgroundAnimation';
import { Sidebar as Example } from "components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="app">
        {localStorage.getItem('email') && (
          <Example />
        )}

        <Outlet />
        <BackgroundAnimation />
      </div>
    </div>
  );
}

export default App;
