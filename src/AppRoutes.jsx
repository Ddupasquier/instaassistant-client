import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './View/Home';
import Settings from './View/Settings';
import Profile from './View/Profile';
import Accounts from './View/Accounts';
import Metrics from './View/Metrics';
import Account from './View/Account';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/account" element={<Profile />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/account" element={<Account />} />
        <Route path="/metrics" element={<Metrics />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
