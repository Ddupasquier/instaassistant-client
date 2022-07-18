import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './View/Home';
import Billing from './View/Billing';
import Profile from './View/Profile';
import Accounts from './View/Accounts';
import Metrics from './View/Metrics';
import Account from './View/Account';
import InstagramConfig from './View/instagramConfig/instagramConfig';



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/account" element={<Account />} />
        <Route path="/metrics" element={<Metrics />} />
        <Route path="/config" element={<InstagramConfig />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
