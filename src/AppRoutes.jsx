import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SWRConfig } from 'swr';

// View Imports
import App from 'App';
import { Billing } from 'views/Billing';
import { Profile } from 'views/Profile';
import { Account } from 'views/Account';
import { FAQ } from 'views/FAQ';
import { AccountUpdate } from 'views/AccountUpdate';
import CurrentTasks from 'views/TasksRunning/CurrentTasks';
import { Accounts } from 'views/Accounts';
import { Stripe } from 'views/Stripe';
import BackgroundAnimation from 'components/Background/BackgroundAnimation';

function AppRoutes() {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
          suspense: true,
      }}
    >
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Profile />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route
            path="/accounts/instagram/:account_id/update"
            element={<AccountUpdate />}
          />
          <Route path="/accounts/instagram/:account_id" element={<Account />} />
          <Route
            path="/accounts/instagram/:account_id/tasks"
            element={<CurrentTasks />}
          />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/stripe" element={<Stripe />} />
          <Route path="test-bg" element={<BackgroundAnimation />} />
        </Route>
      </Routes>
    </SWRConfig>
  );
}

export default AppRoutes;
