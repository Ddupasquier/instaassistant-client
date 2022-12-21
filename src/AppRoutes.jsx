import React from 'react';
// import { UserContext } from 'contexts/userContext';
import { Routes, Route } from 'react-router-dom';
import { SWRConfig } from 'swr';

// View Imports
import App from 'App';
import Auth from 'views/Auth/Auth';
import { Billing } from 'views/Billing';
import { Profile } from 'views/Profile';
import { Account } from 'views/Account';
import { FAQ } from 'views/FAQ';
import { AccountUpdate } from 'views/AccountUpdate';
import ScheduledTasks from 'views/Tasks/ScheduledTasks';
import CurrentTask from 'views/Tasks/CurrentTask';
import { Accounts } from 'views/Accounts';
import { Stripe } from 'views/Stripe';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from 'components/ErrorFallback';
import { ChangePassword } from 'views/Auth/ChangePassword';
import CTRL from 'views/CTRL/CTRL';
import TSK from 'views/TSK/TSK';

const AppRoutes = () => {
  // const { user } = useContext(UserContext);
  return (
    <SWRConfig
      value={{
        /*         fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()), */
        suspense: true,
        shouldRetryOnError: false,
      }}
    >
      {
        // TODO: delete ErrorBoundary if necessary, if kept, add Reset method
      }
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Routes>
          <Route
            path="/password_reset/:reset_token"
            element={<ChangePassword />}
          />
          <Route path="/" element={<App />}>
            <Route
              index
              element={localStorage.getItem('email') ? <Accounts /> : <Auth />}
            />
            <Route path="/CTRL/:ctrl_id" element={<CTRL />} />
            <Route path="/CTRL" element={<CTRL />} />
            <Route path="/TSK/:tsk_id" element={<TSK />} />
            <Route path="/TSK" element={<TSK />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route
              path="/accounts/:account_id/update"
              element={<AccountUpdate />}
            />
            <Route path="/accounts/:account_id" element={<Account />} />
            <Route
              path="/accounts/:account_id/tasks"
              element={<ScheduledTasks />}
            />
            <Route
              path="/accounts/:account_id/tasks/:task_id"
              element={<CurrentTask />}
            />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/stripe" element={<Stripe />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </SWRConfig>
  );
};

export default AppRoutes;
