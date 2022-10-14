import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { returnAccounts } from 'utils';
import AccountsRow from './AccountsRow';
import ErrorFallback from 'components/ErrorFallback';
import useSWR from 'swr';
import { indexAccounts } from 'api';

function AccountsTable({
  searchTerm,
  setUserToDelete,
  setDeleteConfirmVisible,
  handleDeleteConfirmVisible,
}) {
  // TODO: handle error, "no accounts found" message
  const { data, err } = useSWR('/api/accounts', indexAccounts);

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
          {err
            ? 'Error'
            : returnAccounts(data, searchTerm).map((user, i) => (
                <AccountsRow
                  key={i}
                  user={user}
                  setDeleteConfirmVisible={setDeleteConfirmVisible}
                  setUserToDelete={setUserToDelete}
                  handleDeleteConfirmVisible={handleDeleteConfirmVisible}
                />
              ))}
        </ErrorBoundary>
      </tbody>
    </table>
  );
}

export default AccountsTable;
