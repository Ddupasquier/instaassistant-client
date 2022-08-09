import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

//View Imports
import App from './App';
import { Billing } from './View/Billing';
import { Profile } from './View/Profile';
import { Account } from './View/Account';
import { Accounts } from './View/Accounts';
import { FAQ } from './View/FAQ';
import { InstagramConfig } from './View/instagramConfig';
import { Task } from './View/Task';
import Tasks from './View/Tasks';

// NextUI import
import { NextUIProvider, createTheme } from '@nextui-org/react';

const darkTheme = createTheme({
  type: 'dark',
});

const lightTheme = createTheme({
  type: 'light',
});

function AppRoutes() {
  const [theme, setTheme] = useState(darkTheme);

  return (
    <NextUIProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={
            <App
              setTheme={setTheme}
              lightTheme={lightTheme}
              darkTheme={darkTheme}
            />
          }
        >
          <Route index element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/account" element={<Account />} />
          <Route path="/config" element={<InstagramConfig />} />
          <Route path="/task" element={<Task />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Route>
      </Routes>
    </NextUIProvider>
  );
}

export default AppRoutes;
