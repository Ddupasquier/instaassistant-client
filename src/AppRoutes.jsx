import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import { Billing } from './View/Billing';
import { Profile } from './View/Profile';
import { Account } from './View/Account';
import { Accounts } from './View/Accounts';
import { Metrics } from './View/Metrics';
import { InstagramConfig } from './View/instagramConfig';
import { NextUI } from './View/NextUI';

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<App />}>
        <Route index element={<Profile />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/account" element={<Account />} />
        <Route path="/metrics" element={<Metrics />} />
        <Route path="/config" element={<InstagramConfig />} />
        <Route path="/next" element={<NextUI/>} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
