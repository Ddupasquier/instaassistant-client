import React from 'react';
import { Table } from '@nextui-org/react';

function AccountsListItem({ account, index }) {
      console.log(account.username)
  return (
    <Table.Row key={index}>
      <Table.Cell>{account.username}</Table.Cell>
      <Table.Cell>CEO</Table.Cell>
      <Table.Cell>Active</Table.Cell>
    </Table.Row>
  );
}

export default AccountsListItem;
