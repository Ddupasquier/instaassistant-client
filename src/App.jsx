import React, { useContext } from 'react';
import { UserContext } from 'contexts/userContext';
import 'globals/global-classes.scss';
import { Outlet } from 'react-router-dom';
import BackgroundAnimation from 'components/Background/BackgroundAnimation';
import { Sidebar } from 'components/Sidebar/Sidebar';

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      <div className="app">
        {localStorage.getItem('email') && <Sidebar />}
        <Outlet />
        <BackgroundAnimation />
      </div>
    </div>
  );
}

export default App;
