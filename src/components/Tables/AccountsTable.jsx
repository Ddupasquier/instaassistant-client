import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { returnAccounts } from 'utils';
import AccountsRow from './AccountsRow';
import ErrorFallback from 'components/ErrorFallback';
import useSWR from 'swr';
import { indexAccounts, indexCollab } from 'api';

function AccountsTable({ searchTerm }) {
  const { data: myAccounts, error: accountsErr } = useSWR(
    '/api/accounts',
    indexAccounts
  );
  const { data: collabAccounts, error: collabErr } = useSWR(
    '/api/collab-accounts',
    indexCollab
  );

  return (
    <table role="table" aria-label="accounts-table">
      <thead>
        <tr>
          <th className="username-column" scope="col">
            Username
          </th>
          <th scope="col">Platform</th>
          <th scope="col">Tags</th>
          <th scope="col">Active</th>
          <th scope="col">Config</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          {accountsErr
            ? 'Error'
            : returnAccounts(myAccounts, searchTerm).map((user, i) => (
                <AccountsRow key={i} user={user} />
              ))}

          {collabErr
            ? 'Error'
            : returnAccounts(collabAccounts, searchTerm).map((user, i) => (
                <AccountsRow key={i} user={user} />
              ))}
        </ErrorBoundary>
      </tbody>
    </table>
  );
}

export default AccountsTable;
