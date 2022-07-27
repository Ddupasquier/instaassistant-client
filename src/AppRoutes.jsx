import React from 'react';
import { Routes, Route } from 'react-router-dom';

//View Imports
import App from './App';
import { Billing } from './View/Billing';
import { Profile } from './View/Profile';
import { Account } from './View/Account';
import { Accounts } from './View/Accounts';
import { Metrics } from './View/Metrics';
import { InstagramConfig } from './View/instagramConfig';
import { NextUI } from './View/NextUI';
import { Login } from './View/Login';
import { SignUp } from './View/SignUp';

// NextUI import
import { NextUIProvider,createTheme,useDarkMode } from "@nextui-org/react";

const darkTheme = createTheme({
  type: 'dark',
})

const lightTheme = createTheme({
  type: 'light',
})

function AppRoutes() {

  return (
    <NextUIProvider theme={lightTheme}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Profile />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/account" element={<Account />} />
          <Route path="/metrics" element={<Metrics />} />
          <Route path="/config" element={<InstagramConfig />} />
          <Route path="/next" element={<NextUI/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Route>
      </Routes>
    </NextUIProvider>
  );
}

export default AppRoutes;
