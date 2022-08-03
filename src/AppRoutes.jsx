import React from 'react';
import { Routes, Route } from 'react-router-dom';

//View Imports
import App from './App';
import { Billing } from './View/Billing';
import { Profile } from './View/Profile';
import { Account } from './View/Account';
import { Accounts } from './View/Accounts';
import { FAQ } from './View/FAQ';
import { InstagramConfig } from './View/instagramConfig';
import { NextUI } from './View/NextUI';
import { Login } from './View/Login';
import { SignUp } from './View/SignUp';
import { Task } from './View/Task';
import Tasks from './View/Tasks';

// NextUI import
import { NextUIProvider, createTheme } from '@nextui-org/react';


const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#4ADE7B',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',
      gradient:
        'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      backgroundImage: 'url(https://i.ibb.co/KFXV3g0/abstract-lines-1.png)',
    },
  },
});

// const lightTheme = createTheme({
//   type: 'light',
// });

function AppRoutes() {
  return (
    <NextUIProvider theme={darkTheme}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Profile />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/account" element={<Account />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/config" element={<InstagramConfig />} />
          <Route path="/next" element={<NextUI />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/task" element={<Task />} />
          <Route path="/tasks" element={<Tasks />} />
        </Route>
      </Routes>
    </NextUIProvider>
  );
}

export default AppRoutes;
