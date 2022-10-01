import React from 'react';
import { Routes, Route } from 'react-router-dom';

// ------- REDUX -------
import { Provider } from 'react-redux';
import store from './redux';

// View Imports
import App from 'App';
import { Billing } from 'View/Billing';
import { Profile } from 'View/Profile';
import { Account } from 'View/Account';
import { FAQ } from 'View/FAQ';
import { AccountUpdate } from 'View/AccountUpdate';
import { Accounts } from 'View/Accounts';
import { Stripe } from 'View/Stripe';
import BackgroundAnimation from 'Components/Background/BackgroundAnimation';

function AppRoutes() {
  return (
    <Provider store={store}>
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
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/stripe" element={<Stripe />} />
          <Route path="test-bg" element={<BackgroundAnimation />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default AppRoutes;
