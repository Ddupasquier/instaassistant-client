import React from 'react';
import { Routes, Route } from 'react-router-dom';

// ------- REDUX -------
import { Provider } from 'react-redux';
import store from './redux';

// View Imports
import App from 'App';
import { Billing } from 'views/Billing';
import { Profile } from 'views/Profile';
import { Account } from 'views/Account';
import { FAQ } from 'views/FAQ';
import { AccountUpdate } from 'views/AccountUpdate';
import { Accounts } from 'views/Accounts';
import { Stripe } from 'views/Stripe';
import BackgroundAnimation from 'components/Background/BackgroundAnimation';

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
